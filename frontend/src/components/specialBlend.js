import React from "react";
import "./specialBlend.css";
// import Exclusive from "./exclusiceProduct";
const ProductAdvertisement = () => {
  return (
    <div>
    <div className="product-advertisement">
      <div className="leftdv">
        <h6>Exclusive Product New Arrival</h6>
        <h1>Nuterumite Coffee</h1>
        <p style={{ fontSize: 30 }}>SPECIAL BLEND</p>
        <p style={{ fontWeight: "bold" }}>Fresh!</p>
      </div>
      <div className="promotion-image">
        <img src="https://nuturemite.info/wp-content/uploads/2022/11/1074372-1-scaled.jpg" alt="Nuturemite Banana Fruit Powder" />
        <div className="image-text">
          <p className="low-carb">Low Carb</p>
          <p className="brand-name">Nuturemite</p>
          <p className="product-description">Nuturemite-Banana-Fruit-Powder</p>
        </div>
      </div>
    </div>
    <br/>
    <h3>Special Offers</h3>
    <p>All our new arrivals in a exclusive brand selection</p>
    </div>
  );
};

export default ProductAdvertisement;
