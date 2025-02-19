import React, { useEffect } from 'react';
import "./body.css";
import her1 from './images/her1.jpg';
import her2 from './images/her2.jpg';
import her3 from './images/her3.jpg';
import her4 from './images/her4.jpg';
import her5 from './images/her5.jpg';
import her6 from './images/her6.jpg';
import her7 from './images/her7.jpg';
import her8 from './images/her8.jpg';
import her9 from './images/her9.jpg';

import box1Image from './images/box1_image.jpg';
import box2Image from './images/box2_image.jpg';
import box3Image from './images/box3_image.jpg';
import box4Image from './images/box4_image.jpg';
import box5Image from './images/box5_image.jpg';
import box6Image from './images/box6_image.jpg';
import box7Image from './images/box7_image.jpg';
import box8Image from './images/box8_image.jpg';
import IMG11 from './images/IMG_11.jpg';
import IMG12 from './images/IMG_12.jpg';
import IMG13 from './images/IMG_13.jpg';
import IMG14 from './images/IMG_14.jpg';
import IMG15 from './images/IMG_15.jpg';
import IMG16 from './images/IMG_16.jpg';
import IMG17 from './images/IMG_17.jpg';
import IMG18 from './images/IMG_18.jpg';

import productImg from './images/product_img.jpg';
import productImg1 from './images/product1-1.jpg';
import productImg2 from './images/product1-2.jpg';
import productImg3 from './images/product1-3.jpg';
import productImg4 from './images/product1-4.jpg';
import productImg5 from './images/product1-5.jpg';
import productImg6 from './images/product1-6.jpg';
import productImg7 from './images/product1-7.jpg';
import productImg8 from './images/product1-8.jpg';
import productImg9 from './images/product1-9.jpg';
import productImg10 from './images/product1-10.jpg';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
function Body() {
  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');
    const scrollContainer = document.querySelector('.products');

    let counter = 0;
    const interval = 2000; // Change slide every 2 seconds

    function slide() {
      counter++;
      if (counter === slides.length) {
        counter = 0;
        slider.style.transition = 'none'; // Disable transition for resetting to the first slide
        slider.style.transform = 'translateX(0)'; // Reset to the first slide instantly without transition
        setTimeout(() => {
          slider.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition for subsequent slides
          counter = 1; // Start sliding from the second slide
          slider.style.transform = `translateX(-${counter * 100}%)`; // Move to the second slide
        }, 50); // Add a small delay to ensure the transition is disabled before resetting
      } else {
        slider.style.transition = 'transform 0.5s ease-in-out'; // Enable transition for sliding
        slider.style.transform = `translateX(-${counter * 100}%)`; // Move to the next slide
      }
    }

    const slideInterval = setInterval(slide, interval);

    const handleMouseOver = () => {
      scrollContainer.style.overflowX = 'auto';
    };

    const handleMouseOut = () => {
      scrollContainer.style.overflowX = 'hidden';
    };

    scrollContainer.addEventListener('mouseover', handleMouseOver);
    scrollContainer.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearInterval(slideInterval); // Cleanup interval on component unmount
      scrollContainer.removeEventListener('mouseover', handleMouseOver);
      scrollContainer.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div>
      <div>
      <div className="slider-container">
        <div className="slider">
          <img src={her1} className="slide" alt="Slide 1" />
          <img src={her2} className="slide" alt="Slide 2" />
          <img src={her3} className="slide" alt="Slide 3" />
          <img src={her4} className="slide" alt="Slide 4" />
          <img src={her5} className="slide" alt="Slide 5" />
          <img src={her6} className="slide" alt="Slide 6" />
          <img src={her7} className="slide" alt="Slide 7" />
          <img src={her8} className="slide" alt="Slide 8" />
          <img src={her9} className="slide" alt="Slide 9" />
        </div>
      </div>
      <div className="hero-msg">
        You are on Amazon.com You can also shop on Amazon India for millions of products with fast local delivery. <a href="https://www.amazon.in">Click here to go to Amazon.in</a>
      </div>
    </div>
    <div className="shop-section">
      <div className="box">
        <div className="box-content">
          <h3>Discount Offers</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box1Image})` }}></div>
          <p>
            <a href="/Products" style={{ color: '#007185', textDecoration: 'none' }}>
              see more
            </a>
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Health & Personal Care</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box2Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Furniture</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box3Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Electronics</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box4Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Beauty picks</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box5Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Pet Care</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box6Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>New Arrival in Toys</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box7Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Discover Fashion Trends</h3>
          <div className="box-img" style={{ backgroundImage: `url(${box8Image})` }}></div>
          <p>see more</p>
        </div>
      </div>
    </div>

    <div className="products-slider">
      <h2>Best Sellers in Sports & Outdoors</h2>
      <div className="products">
        <a href="/product_1">
          <img src={productImg} alt="Product" />
        </a>
        <img src={productImg1} alt="Product 1" />
        <img src={productImg2} alt="Product 2" />
        <img src={productImg3} alt="Product 3" />
        <img src={productImg4} alt="Product 4" />
        <img src={productImg5} alt="Product 5" />
        <img src={productImg6} alt="Product 6" />
        <img src={productImg7} alt="Product 7" />
        <img src={productImg8} alt="Product 8" />
        <img src={productImg9} alt="Product 9" />
        <img src={productImg10} alt="Product 10" />
      </div>
    </div>
    <div className="shop-section">
      <div className="box">
        <div className="box-content">
          <h3>Groceries</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG11})` }}></div>
          <p>
            <a href="/Products" style={{ color: '#007185', textDecoration: 'none' }}>
              see more
            </a>
          </p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Home Appliances</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG12})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Cleaning</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG13})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Gaming</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG14})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Clothes & Fabric</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG15})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Smart Phones(5g)</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG16})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>New Arrival in Jewellery</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG17})` }}></div>
          <p>see more</p>
        </div>
      </div>
      <div className="box">
        <div className="box-content">
          <h3>Discover Fashion Trends</h3>
          <div className="box-img" style={{ backgroundImage: `url(${IMG18})` }}></div>
          <p>see more</p>
        </div>
      </div>
    </div>

    </div>
  );
}
export default Body;