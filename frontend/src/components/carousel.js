// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <Box sx={{ height: '60vh', backgroundColor: '#AEBEC4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography variant="subtitle1" color="textSecondary">
            Exclusive Product New Arrival
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Fit Low Carb
          </Typography>
          <Typography variant="h4" color="textSecondary">
            CANDY BAR
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Sugar-Free BREAKFAST PRODUCTS ON SALE
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 2 }}>
            UP TO <span style={{ color: 'grey' }}>70%</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: '60vh', backgroundColor: '#AEBEC4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography variant="subtitle1" color="textSecondary">
            Special Offer
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Protein Bars
          </Typography>
          <Typography variant="h4" color="textSecondary">
            HIGH PROTEIN
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Healthy Snacks On Sale
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 2 }}>
            UP TO <span style={{ color: 'grey' }}>50%</span>
          </Typography>
        </Box>
      </Box>
    </Slider>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: 'block', background: '#008cba',height:27, position: 'absolute', right: '10px', zIndex: '1' }}
      onClick={onClick}
    >
      {/* <ArrowForwardIosIcon style={{ color: '#fff' }} /> */}
    </Button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: 'block', background: '#008cba', height:27, position: 'absolute', left: '10px', zIndex: '1'}}
      onClick={onClick}
    >
      {/* <ArrowBackIosIcon style={{ color: '#fff' }} /> */}
    </Button>
  );
};

export default Carousel;
