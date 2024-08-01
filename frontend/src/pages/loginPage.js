import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Ensure all required fields are filled
    if (!formData.email || !formData.password) {
      setError('Please fill all required fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3003/api/login', formData);
      const userType = response.data.data.type; // Extract the user type from the response
      console.log(userType)
if(userType==='vendor'){
navigate('/vendor')
}
else if(userType==='admin'){
  navigate('/admin')
}
    } catch (error) {
      console.error('There was an error logging in!', error);
      setError(
        error.response?.data?.message ||
          'Login failed. Please check your credentials and try again.'
      );
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Container maxWidth="sm">
      <Box className="cont">
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            type="password"
          />
          {error && (
            <Typography color="error" variant="body2" className="error">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="submit"
          >
            Login
          </Button>
        </form>
        <div className="register-link">
          <Typography variant="body2">
            Don't have an account?{' '}
            <Button color="primary" onClick={handleRegisterClick}>
              Register
            </Button>
          </Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
