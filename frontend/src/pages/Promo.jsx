import React, { useState, useEffect } from 'react';
import { Box, IconButton} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import iphone from '../assets/iphone.png'
import huawei from '../assets/huawei.png'
import realme from '../assets/Realme.png'
import samsung from '../assets/samsung.png'
import macbook from '../assets/macbook.png'



const banners = [iphone,samsung,macbook,realme,huawei];

const Promo = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
  
    return (
        <Box
      sx={{
        position: 'relative',
        maxWidth: '800px',
        margin: 'auto',
        overflow: 'hidden',
        marginY: 10
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
    
    )
}
export default Promo