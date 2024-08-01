import React from 'react';
import Slider from 'react-slick';
import './productCard.css';

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style,marginLeft:27, display: 'block', background: '#4C77D1', zIndex:1, width:30,height:20 }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...props.style, display: 'block', background: '#4C77D1',width:30,height:20 }}
      onClick={onClick}
    />
  );
};

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


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // Adjust this number based on your preference
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductCard = () => {
  return (
    <div>
  <div style={{backgroundColor:"#E9EBED" ,padding:"20px"}}>
    <h3>Popular Departments</h3>
    <p style={{color:"grey"}}>Products From These Categories Often Buy</p>
    <br/>
    <h3>Most Popular</h3>
    <p style={{color:"grey"}}>All our new arrivals in a exclusive brand selection</p>
    </div>
    <div className="app-container" >
      <aside className="sidebar">
  <div className="sort-by">
    <h4 style={{paddingLeft:30}}>SORT BY</h4>
    <br/>
    <ul type="none">
      <li>
        <input type="checkbox" id="viewAll" />
        <label htmlFor="viewAll">View All</label>
      </li>
      <br/>
      <li>
        <input type="checkbox" id="antioxidants" />
        <label htmlFor="antioxidants">Antioxidants</label>
      </li><br/>
      <li>
        <input type="checkbox" id="ayurvedic" />
        <label htmlFor="ayurvedic">Ayurvedic</label>
      </li><br/>
      <li>
        <input type="checkbox" id="digestiveHealth" />
        <label htmlFor="digestiveHealth">Digestive Health</label>
      </li><br/>
      <li>
        <input type="checkbox" id="generalHealth" />
        <label htmlFor="generalHealth">General Health</label>
      </li><br/>
      <li>
        <input type="checkbox" id="herbalSupplements" />
        <label htmlFor="herbalSupplements">Herbal, Specialty Supplements</label>
      </li><br/>
      <li>
        <input type="checkbox" id="immuneHealth" />
        <label htmlFor="immuneHealth">Immune Health</label>
      </li><br/>
      <li>
        <input type="checkbox" id="menHealth" />
        <label htmlFor="menHealth">Men Health</label>
      </li><br/>
      <li>
        <input type="checkbox" id="organic" />
        <label htmlFor="organic">Organic</label>
      </li><br/>
      <li>
        <input type="checkbox" id="personalCare" />
        <label htmlFor="personalCare">Personal Care</label>
      </li><br/>
      <li>
        <input type="checkbox" id="sexualHealth" />
        <label htmlFor="sexualHealth">Sexual Health</label>
      </li><br/>
      <li>
        <input type="checkbox" id="vitaminsMinerals" />
        <label htmlFor="vitaminsMinerals">Vitamins, Minerals</label>
      </li><br/>
      <li>
        <input type="checkbox" id="womenHealth" />
        <label htmlFor="womenHealth">Women Health</label>
      </li><br/>
    </ul>
  </div>
</aside>

      <main className="product-list" >
        <Slider {...settings}>
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
        </Slider>
      </main>
    </div>
    </div>
  );
};

export default ProductCard;
