// Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
  Person,
  PersonAdd,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Ensure useNavigate is imported

const Header = () => {
  const navigate = useNavigate(); // Define navigate using the hook

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      style={{ height: 150, backgroundColor: 'white', zIndex: 1100 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img
            src="https://th.bing.com/th/id/OIP.2c92iLFfdflWyVxUyd4bEAHaGW?w=206&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            style={{ height: 150, marginLeft: 50 }}
            alt="Logo"
          />
        </Box>
        <Box display="flex" alignItems="center" style={{paddingLeft:10}}>
          <Button color="inherit">HOME</Button>
          {/* <Button color="inherit">BLOG</Button>
          <Button color="inherit">SHOP</Button>
          <Button color="inherit">CART</Button>
          <Button color="inherit">MY ACCOUNT</Button> */}
          <Button color="inherit" >ABOUT US</Button>
          <Button color="inherit" onClick={() => navigate('/login')}>LOG IN</Button>
          <Button color="inherit" onClick={() => navigate('/register')}>REGISTER</Button>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <Person />
          </IconButton>
          <IconButton color="inherit">
            <PersonAdd />
          </IconButton>
          <Typography variant="body2" color="textSecondary" sx={{ mx: 2 }}>
            8919993233
          </Typography>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <YouTube />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
