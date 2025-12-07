import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider ,Menu, MenuItem , IconButton} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import iphone from '../assets/iphone.png'
import huawei from '../assets/huawei.png'
import realme from '../assets/Realme.png'
import samsung from '../assets/samsung.png'
import macbook from '../assets/macbook.png'
import Item from "../component/Item";
import { listProduct } from "../services/ProductService";

const banners = [iphone,samsung,macbook,realme,huawei];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dataTest, setDataTest] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    handleClose();
    handleClose();

    let sortedData;

    switch (option) {
      case 'A-Z':
        sortedData = [...dataTest.data].sort((a, b) => a.name.localeCompare(b.name));    
        break;
      case 'Z-A':
        sortedData = [...dataTest.data].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Price Up':
        sortedData = [...dataTest.data].sort((a, b) => a.purchasePrice - b.purchasePrice);
        break;
      case 'Price Down':
        sortedData = [...dataTest.data].sort((a, b) => b.purchasePrice - a.purchasePrice);
        break;
      default:
        sortedData = dataTest;
    }

    setDataTest((prevDataTest) => ({
      ...prevDataTest,
      data: sortedData,
    }));
    console.log(`Sorting by: ${option}`);
  };

  useEffect(() => {
    listProduct()
      .then((response) => {
        setDataTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };
  console.log(dataTest);
    
  return (
    <Box p={4}>
      <Box
      sx={{
        position: 'relative',
        width: '50%',
        margin: 'auto',
        overflow: 'hidden',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Hình ảnh banner */}
      <Box
        component="img"
        src={banners[currentSlide]}
        alt={`Banner ${currentSlide + 1}`}
        sx={{
          width: '100%',
          height: 'auto',
          transition: 'transform 0.5s ease-in-out',
        }}
      />

      {/* button */}
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* button */}
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "red",
            }}
          >
            SẢN PHẨM MỚI
          </Typography>
          <Divider
            sx={{
              width: "300px",
              backgroundColor: "red",
              height: 2,
            }}
          />
        </Box>
        <Button onClick={handleClick} variant="contained">
        Sort
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelectOption('A-Z')}>A-Z</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Z-A')}>Z-A</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Price Up')}>Giá tăng</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Price Down')}>Giá giảm</MenuItem>
      </Menu>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          mt: 2,
        }}
      >
        {dataTest.data &&
          dataTest.data.slice(0, 8).map((item, index) => (
            <Item
              name={item.name}
              image={item.url}//change to item.url when have
              new_price={item.purchasePrice}
              old_price={item.salePrice}
              sale={item.percentDiscount}
              id={item.id}
              key={index}
            />
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "700",
              color: "red",
            }}
          >
            SIÊU ƯU ĐÃI
          </Typography>
          <Divider
            sx={{
              width: "300px",
              backgroundColor: "red",
              height: 2,
            }}
          />
        </Box>
        <Button onClick={handleClick} variant="contained">
        Sort
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelectOption('A-Z')}>A-Z</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Z-A')}>Z-A</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Price Up')}>Giá tăng</MenuItem>
        <MenuItem onClick={() => handleSelectOption('Price Down')}>Giá giảm</MenuItem>
      </Menu>
      </Box>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          mt: 2,
        }}
      >
        {dataTest.data &&
          dataTest.data.slice(8, 16).map((item, index) => (
            <Item
              name={item.name}
              image={item.url}//change to item.url when have
              new_price={item.purchasePrice}
              old_price={item.salePrice}
              sale="10"
              id={item.id}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Home;
