import React from 'react'
import './Product_1.css';
import "./App.css";
import productImage from './assets/product_img.jpg';
import ratingImage from './assets/rating_img.png';
import circleIcon from './assets/circle_icon.png';
import locationIcon from './assets/location_icon_dark.png';
import product2_1 from './assets/product2-1.jpg';
import product2_2 from './assets/product2-2.jpg';
import product2_3 from './assets/product2-3.jpg';
import product2_4 from './assets/product2-4.jpg';
import product2_5 from './assets/product2-5.jpg';
import product2_6 from './assets/product2-6.jpg';
import product2_7 from './assets/product2-7.jpg';
import product2_8 from './assets/product2-8.jpg';
import product2_9 from './assets/product2-9.jpg';
import product2_10 from './assets/product2-10.jpg';
import product2_11 from './assets/product2-11.jpg';
import product2_12 from './assets/product2-12.jpg';

function Product_1() {
  return (
    <div>
      <>
  <p className="breadcrum">Video Games &gt; PC &gt; Accessories &gt; Headset</p>
  <div className="product-display">
  <div className="product-d-image">
    <div className="product-list-image">
      <img src={productImage} width={60} alt="" />
      <img src={productImage} width={60} alt="" />
      <img src={productImage} width={60} alt="" />
      <img src={productImage} width={60} alt="" />
      <img src={productImage} width={60} alt="" />
    </div>
    <div className="product-main-image">
      <img src={productImage} width={400} alt="" />
    </div>
  </div>
    <div className="product-d-details">
      <p className="product-title">
        BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller,
        Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround,
        Soft Memory Earmuffs (Blue)
      </p>
      <p className="product-store">Visit the BENGOO Store</p>
      <div className="product-rating">
        <div>
          <div>
            4.3 <img src={ratingImage} height={20} alt="" />
          </div>
          <p>104,185 ratings | Search this page</p>
        </div>
        <p>
          <span>#1 Best Seller</span> in PC Game Headsets
        </p>
        <h5>10K+ bought in past month</h5>
        <hr />
      </div>
      <div className="product-prices">
        <div>
          <p>-35%</p>
          <h1>
            ₹<span>25</span>.99
          </h1>
        </div>
        <h5>
          List Price: <span>$39.99</span>
        </h5>
        <p>
          Get <b>Fast, Free Shipping</b> with <span>Amazon Prime</span>
        </p>
        <p>
          <span>FREE Returns</span>
        </p>
        <p>
          <span>Join Prime to buy this item at ₹22.99</span>
        </p>
        <p>
          Available at a lower price from <span>other sellers</span> that may
          not offer free Prime shipping.
        </p>
      </div>
      <div className="product-color-selection">
        <p>
          Color: <b>Blue</b>
        </p>
        <div className="product-color-options">
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Black</p>
          </div>
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Blue</p>
          </div>
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Green</p>
          </div>
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Pink</p>
          </div>
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Purple</p>
          </div>
          <div className="option">
          <img src={productImage} width={30} alt="" />
            <p>Red</p>
          </div>
        </div>
      </div>
      <div className="product-info">
        <p>
          <b>Brand</b>
        </p>
        <p>BENGOO</p>
        <p>
          <b>Model Name</b>
        </p>
        <p>G9000</p>
        <p>
          <b>Color</b>
        </p>
        <p>Blue</p>
        <p>
          <b>Form Factor</b>
        </p>
        <p>Over Ear</p>
        <p>
          <b>Connectivity Technology</b>
        </p>
        <p>Wired</p>
      </div>
      <hr />
      <div className="product-description">
        <h1>About this item</h1>
        <ul>
          <li>
            【Multi-Platform Compatible】Support PlayStation 4, New Xbox One,
            PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone.
            Please note you need an extra Microsoft Adapter (Not Included) when
            connect with an old version Xbox One controller.
          </li>
          <li>
            【Surrounding Stereo Subwoofer】Clear sound operating strong brass,
            splendid ambient noise isolation and high precision 40mm magnetic
            neodymium driver, acoustic positioning precision enhance the
            sensitivity of the speaker unit, bringing you vivid sound field,
            sound clarity, shock feeling sound. Perfect for various games like
            Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars
            Battlefront, Overwatch, World of Warcraft Legion, etc.
          </li>
          <li>
            【Noise Isolating Microphone】Headset integrated onmi-directional
            microphone can transmits high quality communication with its premium
            noise-concellng feature, can pick up sounds with great sensitivity
            and remove the noise, which enables you clearly deliver or receive
            messages while you are in a game. Long flexible mic design very
            convenient to adjust angle of the microphone.
          </li>
          <li>
            【Great Humanized Design】Superior comfortable and good air
            permeability protein over-ear pads, muti-points headbeam, acord with
            human body engineering specification can reduce hearing impairment
            and heat sweat.Skin friendly leather material for a longer period of
            wearing. Glaring LED lights desigend on the earcups to highlight
            game atmosphere.
          </li>
          <li>
            【Effortlessly Volume Control】High tensile strength, anti-winding
            braided USB cable with rotary volume controller and key microphone
            mute effectively prevents the 49-inches long cable from twining and
            allows you to control the volume easily and mute the mic as
            effortless volume control one key mute.
          </li>
        </ul>
      </div>
    </div>
    <div className="product-d-purchase">
      <div className="title">
        <h3>Buy new:</h3>
        <img src={circleIcon} width={20} alt="" />
      </div>
      <h1 className="price">
        ₹<span>25</span>99
      </h1>
      <div className="gap">
        <p>
          Get <b>Fast, Free Shipping</b> with <span>Amazon Prime</span>
        </p>
        <p>
          <span>FREE Returns</span>
        </p>
      </div>
      <div className="gap">
        <p>
          <span>FREE delivery</span> <b>Saturday</b>,
        </p>
        <p>
          <b>January 27</b> on orders shipped by Amazon over ₹35
        </p>
      </div>
      <div className="gap">
        <p>
          Or fastest delivery <b>Tomorrow</b>, <b>January 23</b>. Order within{" "}
          <span>10 hrs 56 mins</span>
        </p>
      </div>
      <div className="pincode-section">
      <img src={locationIcon} width={20} alt="" />
        <p>
          <span>Deliver to ucss 230138</span>
        </p>
      </div>
      <h2 className="product-stock">In Stock</h2>
      <select className="product-quantity">
        <option value={1}>Quantity: 1</option>
        <option value={2}>Quantity: 2</option>
        <option value={3}>Quantity: 3</option>
      </select>
      <button className="btn">Add to Cart</button>
      <button className="btn product-buy">Buy Now</button>
      <div className="product-seller-info">
        <p>Ships from</p>
        <p className="product-info-value">Amazon</p>
        <p>Sold by</p>
        <p className="product-info-value">Bengoo Inc.</p>
        <p>Returns</p>
        <p className="product-info-value">
          Eligible for Return, Refund or Replacement within 30 days of receipt
        </p>
        <p>Payment</p>
        <p className="product-info-value">Secure transaction</p>
      </div>
      <hr />
      <button className="product-addtolist">Add to List</button>
    </div>
  </div>
  <div className="products-slider-with-price">
    <h2>Deals Under ₹25</h2>
    <div className="products">
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_1} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_2} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_3} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_4} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_5} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_6} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_7} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_8} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_9} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
          <img src={product2_10} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_11} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_12} alt="" />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>14.49</span> List Price:₹19.95
        </p>
        <h4>This product is the best for you</h4>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Product_1
