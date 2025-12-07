import React, { useState, useEffect } from 'react';

const generateRandomBoard = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return Array.from({ length: 5 }, (_, row) =>
    numbers.slice(row * 5, row * 5 + 5)
  );
};

const GameCoin = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playerBoard, setPlayerBoard] = useState([]);
  const [computerBoards, setComputerBoards] = useState([]);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState(null);

  const startGame = () => {
    setPlayerBoard(generateRandomBoard());
    setComputerBoards([
      generateRandomBoard(),
      generateRandomBoard(),
      generateRandomBoard(),
    ]);
    setCalledNumbers([]);
    setCurrentNumber(null);
    setWinner(null);
    setIsGameStarted(true);
  };

  const stopRandomNumber = () => {
    if (calledNumbers.length === 25) return;

    setIsRolling(true);
    const rollInterval = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 25) + 1);
    }, 200);

    setTimeout(() => {
      clearInterval(rollInterval);
      let newNumber;
      do {
        newNumber = Math.floor(Math.random() * 25) + 1;
      } while (calledNumbers.includes(newNumber));
      setCurrentNumber(newNumber);
      setCalledNumbers((prev) => [...prev, newNumber]);
      setIsRolling(false);
    }, 3000);
  };

  const checkWinner = (board) => {
    // Kiểm tra các hàng
    for (let row of board) {
      if (row.every((num) => calledNumbers.includes(num))) return true;
    }
    // Kiểm tra các cột
    for (let col = 0; col < 5; col++) {
      if (board.every((row) => calledNumbers.includes(row[col]))) return true;
    }
    // Kiểm tra các đường chéo
    if (board.every((row, idx) => calledNumbers.includes(row[idx]))) return true;
    if (board.every((row, idx) => calledNumbers.includes(row[4 - idx])))
      return true;

    return false;
  };

  useEffect(() => {
    if (winner) return;
    if (checkWinner(playerBoard)) setWinner('Người chơi');
    else if (computerBoards.some((board) => checkWinner(board)))
      setWinner('Máy');
  }, [calledNumbers]);

  const renderBoard = (board) => (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((num, colIndex) => (
            <div
              key={colIndex}
              className={`cell ${calledNumbers.includes(num) ? 'marked' : ''}`}
            >
              {num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="App">
      <style>
        {`
          .App {
            font-family: Arial, sans-serif;
            text-align: center;
            width: auto;
            height: 500px;
            border-radius: 50px;
            border: 10px solid black;
            margin: 20px;
          }

          .controls {
            margin: 20px 0;
          }

          button {
            padding: 10px 20px;
            margin: 0 5px;
            border: none;
            background-color: #28a745;
            color: white;
            cursor: pointer;
            border-radius: 4px;
          }

          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .current-number {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
          }

          .boards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .player-board,
          .computer-board {
            width: 200px;
            text-align: center;
          }

          .board {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px;
          }

          .row {
            display: contents;
          }

          .cell {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .cell.marked {
            background-color: #ffd700;
            color: white;
          }

          .winner {
            font-size: 24px;
            font-weight: bold;
            color: #28a745;
            margin-top: 20px;
          }
        `}
      </style>
      <h1>Loto Bingo</h1>
      {!isGameStarted ? (
        <button onClick={startGame}>Bắt đầu</button>
      ) : (
        <>
          <div className="controls">
            <button
              onClick={stopRandomNumber}
              disabled={!!winner || isRolling || calledNumbers.length === 25}
            >
              {isRolling ? 'Đang quay...' : 'Quay'}
            </button>
            <button onClick={startGame}>Chơi mới</button>
          </div>
          {currentNumber !== null && (
            <div className="current-number">Số quay: {currentNumber}</div>
          )}
          <div className="boards-container">
            <div className="player-board">
              <h2>Người chơi</h2>
              {renderBoard(playerBoard)}
            </div>
            {computerBoards.map((board, index) => (
              <div key={index} className="computer-board">
                <h2>Máy {index + 1}</h2>
                {renderBoard(board)}
              </div>
            ))}
          </div>
          {winner && <div className="winner">🎉 {winner} chiến thắng! 🎉</div>}
        </>
      )}
    </div>
  );
};

export default GameCoin;