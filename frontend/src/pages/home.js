import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/navbar';
import Carousel from '../components/carousel'; 
import Service from '../components/services';
import ProductCard from '../components/productCard';
import CarouselComponent from '../components/weekSpecial';
import ProductAdvertisement from '../components/specialBlend';
import Exclusive from '../components/exclusiceProduct';
import Footer from '../components/footer';


const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.nuturemite.info/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
          <Header />
      <Carousel /> {/* Add the Carousel component here */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} /> 
        ))}
      </div>
      <Service/>
    <ProductCard/>
    <CarouselComponent/>
    <ProductAdvertisement/>
      <Exclusive/>
      <Footer/>
    </div>
  );
};

export default HomePage;
