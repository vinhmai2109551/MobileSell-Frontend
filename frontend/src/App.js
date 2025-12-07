import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Category from './pages/Category';
import Chatbox from './pages/Chatbox';
import Product from './pages/Product_details';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShoppingCart from './pages/ShoppingCart';
import GameCoin from './pages/GameCoin';
function App() {
  return ( 
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/chatbox' element={<Chatbox />}/>
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
        <Route path="/gamecoin" element={<GameCoin/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
