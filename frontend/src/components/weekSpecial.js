import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productCard.css';

// Custom arrow components
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...styles.arrow,
        right: 0,
        borderRadius: 1,
        background: "#008cba",
        height: 27,
        position: "absolute",
      }}
      onClick={onClick}
    >
      {/* <span>&gt;</span> */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...styles.arrow,
        left: 0,
        borderRadius: 1,
        background: "#008cba",
        height: 27,
        position: "absolute",
      }}
      onClick={onClick}
    >
      {/* <span>&lt;</span> */}
    </div>
  );
};

const styles = {
  arrow: {
    width: 40,
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  }
};

const products = [
  {
    id: 1,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 250 gms',
    oldPrice: '₹325.00',
    newPrice: '₹260.00',
    rating: 4.5
  },
  {
    id: 2,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074344-2-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 450 gms',
    oldPrice: '₹610.00',
    newPrice: '₹488.00',
    rating: 4.0
  },
  {
    id: 3,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074340-1-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Ashwagandha Powder 900 gms',
    oldPrice: '₹1,050.00',
    newPrice: '₹844.00',
    rating: 4.8
  },
  {
    id: 4,
    img: 'https://th.bing.com/th/id/OIP.An60uo6zbHDOxVJn596WcwHaI-?w=162&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'Antioxidants',
    title: 'Nuturemite AstaReal - Astaxanthin 6 mg Veg Capsules',
    oldPrice: '₹516.00',
    newPrice: '₹413.00',
    rating: 3.5
  },
  {
    id: 5,
    img: 'https://th.bing.com/th/id/OIP.dWdFFp-c9kAFdICsDzr0-gHaHg?w=193&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    category: 'Men Health',
    title: 'Nuturemite Abso curcumin 500 mg Veg capsules',
    oldPrice: '₹1,073.00',
    newPrice: '₹858.00',
    rating: 4.2
  },
  {
    id: 6,
    img: 'https://nuturemite.info/wp-content/uploads/2022/11/1074363-1-2048x1904.jpg',
    category: 'Ayurvedic',
    title: 'Nuturemite Amla Powder 250 gms',
    oldPrice: '₹160.00',
    newPrice: '₹128.00',
    rating: 4.7
  },
];

const Special = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust this number based on your design
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
  
    if (halfStar) {
      stars.push(<span key={fullStars}>&#9733;</span>);
    }
  
    return stars;
  };

  return (
    <div>
      <div style={{backgroundColor:"#E2E2E2"}}>
        <h3 style={{ fontWeight: "bolder" }}>This Week's Special</h3>
        <p style={{color:"grey"}}>All our new arrivals in a exclusive brand selection</p>
      </div>
      <div className="product-list-carousel">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.img} alt={product.title} />
              <p className="category">{product.category}</p>
              <h4>{product.title}</h4>
              <div className="rating">{renderStars(product.rating)}</div>
              <p className="price">
                <span className="old-price">{product.oldPrice}</span>
                <span className="new-price">{product.newPrice}</span>
              </p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Special;
