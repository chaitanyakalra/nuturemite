import React from 'react';
import './exclusive.css';

const products = [
  {
    id: 1,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 250 gms',
    oldPrice: '₹325.00',
    newPrice: '₹260.00'
  },
  {
    id: 2,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074344-2-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 450 gms',
    oldPrice: '₹610.00',
    newPrice: '₹488.00'
  },
  {
    id: 3,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074344-2-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 900 gms',
    oldPrice: '₹1,050.00',
    newPrice: '₹844.00'
  },
  {
    id: 4,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074340-1-2048x1904.jpg',
    category: 'Antioxidants',
    title: 'Nuturemite AstaReal - Astaxanthin 6 mg Veg Capsules',
    oldPrice: '₹516.00',
    newPrice: '₹413.00'
  },
  
  {
    id: 5,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-2048x1904.jpg',
    category: 'Men Health',
    title: 'Nuturemite curcumin acumo 500 mg Veg capsules',
    oldPrice: '₹1,073.00',
    newPrice: '₹858.00'
  },
  {
    id: 6,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Amla Ayurvedic Powder Veg 250 gms',
    oldPrice: '₹160.00',
    newPrice: '₹128.00'
  },
];
const Exclusive = () => {
  return (
    <div className="containered">
      <aside className="side-bar">
        <div className="sortedby">
          <h4>Exclusive Products</h4>
        </div>
      </aside>
      <main className="product">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.title} />
            <p className="category">{product.category}</p>
            <h4>{product.title}</h4>
            <p className="price">
              <span className="old-price">{product.oldPrice}</span>
              <span className="new-price">{product.newPrice}</span>
            </p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Exclusive;
