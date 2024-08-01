import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
// import VendorDashboard from './pages/vendorDashboard';
import VendorListPage from './pages/vendorListPage';
// import AdminDashboard from './pages/adminDashboard';
import AdminPage from './pages/adminDashboard';
import VendorList from './pages/vendorListPage';
import VendorPage from './pages/vendorDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage/>} />
        <Route path='/vendor' element={<VendorList/>}/>
        <Route path='/vendor' element={<VendorPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}


export default App;
