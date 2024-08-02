import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, MenuItem, Select, FormControl, InputLabel, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    vendorname: "",
    vendornumber: 0,
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://nuturemite-1.onrender.com/api/register", formData)
      .then(response => {
        console.log(response);
        setOpen(true);
      })
      .catch(error => {
        console.error("There was an error registering!", error);
        setError(error.response?.data?.message || "Registration failed. Please check your details and try again.");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Box className="cont">
        <Typography variant="h4">Register</Typography>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
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
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="vendor">Vendor</MenuItem>
            </Select>
          </FormControl>
          {formData.type === "vendor" && (
            <>
              <TextField
                fullWidth
                label="Vendor Name"
                name="vendorname"
                value={formData.vendorname}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Vendor Number"
                name="vendornumber"
                value={formData.vendornumber}
                onChange={handleChange}
                margin="normal"
                required
                type="number"
              />
            </>
          )}
          {error && (
            <Typography color="error" variant="body2" className="error">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="regist"
            // onClick={handleLoginClick}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="login"
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </form>
        <div className="login-link">
          <Typography variant="body2">
            Already registered?{" "}
            <Button color="primary" onClick={handleLoginClick}>
              Login
            </Button>
          </Typography>
        </div>
      </Box>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registered successfully!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Register;
