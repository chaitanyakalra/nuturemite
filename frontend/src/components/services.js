import React from 'react';
import './service.css';

const Service = () => {
  return (
    <div className="container">
      <div className="feature">
        <img src="https://img.icons8.com/?size=50&id=11942&format=png" alt="Free Shipping" />
        <h3>FREE SHIPPING</h3>
        <p>Free shipping on all orders over ₹2000</p>
      </div>
      <div className="feature">
        <img src="https://cdn-icons-png.flaticon.com/128/2529/2529396.png" alt="Money Back Guarantee" />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>100% money back guarantee</p>
      </div>
      <div className="feature">
        <img src="https://cdn-icons-png.flaticon.com/128/6715/6715756.png" alt="Online Support 24/7" />
        <h3>ONLINE SUPPORT 24/7</h3>
        <p>Whatsapp 8919993233 For online support</p>
      </div>
      <div className="feature">
        <img src="https://image.shutterstock.com/image-vector/credit-card-icon-shield-padlock-260nw-1685904829.jpg" alt="Secure Payment" />
        <h3>SECURE PAYMENT</h3>
        <p>100% Secure payments in our portal</p>
      </div>
    </div>
  );
}

export default Service;