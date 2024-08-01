// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, YouTube, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2d2d2d', color: '#fff', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Help & FAQs</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Order Tracking</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Shipping & Delivery</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Orders History</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Advanced Search</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Login</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>About Us</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Careers</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Our Stores</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Corporate Sales</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Careers</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              More Information
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Affiliates</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Refer a Friend</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Student Beans Offers</Link>
            <Link href="#" color="inherit" display="block" sx={{ color: 'grey', textDecoration: 'none', '&:hover': { color: 'white' } }}>Gift Vouchers</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ pr: 1, color: 'white', textDecoration: 'none', '&:hover': { color: 'skyblue' } }} ><Facebook /></Link>
              <Link href="#" color="inherit" sx={{ pr: 1, color: 'white', textDecoration: 'none', '&:hover': { color: 'skyblue' } }}><Twitter /></Link>
              <Link href="#" color="inherit" sx={{ pr: 1, color: 'white', textDecoration: 'none', '&:hover': { color: 'skyblue' } }}><YouTube /></Link>
              <Link href="#" color="inherit" sx={{ pr: 1, color: 'white', textDecoration: 'none', '&:hover': { color: 'skyblue' } }}><Instagram /></Link>
              <Link href="#" color="inherit" sx={{ pr: 1, color: 'white', textDecoration: 'none', '&:hover': { color: 'skyblue' } }}><LinkedIn /></Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="white">
            © Copyright 2022. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
