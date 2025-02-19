import React from 'react';
import "./Checkout.css"; 
import ipad_img from "./assets/ipad_img.jpg";
import product_img from "./assets/product_img.jpg";
import product2_1 from "./assets/product2-1.jpg";
import product2_2 from "./assets/product2-2.jpg";
import product2_3 from "./assets/product2-3.jpg";
import product2_4 from "./assets/product2-4.jpg";
import product2_5 from "./assets/product2-5.jpg";
import product2_6 from "./assets/product2-6.jpg";
import product2_7 from "./assets/product2-7.jpg";
import product2_8 from "./assets/product2-8.jpg";
import product2_9 from "./assets/product2-9.jpg";
import product2_10 from "./assets/product2-10.jpg";
import product2_11 from "./assets/product2-11.jpg";
import product2_12 from "./assets/product2-12.jpg";

function Checkout() {
  return (
    <div>
  <div className="cart">
    <div className="cart-left">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="product-cart-list">
      <img src={ipad_img} />
        <div>
          <div className="product-cart-titleprice">
            <p>
              Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch
              Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID,
              All-Day Battery Life – Space Gray
            </p>
            <p>
              <b>₹24900.00</b>
            </p>
          </div>
          <p className="product-cart-bestseller">
            <span>#1 Best Seller</span> in Computer Tablets
          </p>
          <p className="product-cart-stock">In Stock</p>
          <p className="product-cart-delivery">
            FREE delivery <b>Mon, Jan 29</b> available at checkout
          </p>
          <p className="product-cart-returns">FREE Returns ⮷</p>
          <p className="product-cart-giftoption">
            Gift options not available. <span>Learn more</span>
          </p>
          <div className="product-cart-specs">
            <p>
              <b>Style:</b>
            </p>
            <p>WiFi</p>
            <p>
              <b>Size:</b>
            </p>
            <p>64GB</p>
            <p>
              <b>Color:</b>
            </p>
            <p>Space Gray</p>
          </div>
          <div className="product-cart-list-action">
            <select>
              <option value="Qty: 1">Qty: 1</option>
              <option value="Qty: 2">Qty: 2</option>
              <option value="Qty: 3">Qty: 3</option>
              <option value="Qty: 4">Qty: 4</option>
              <option value="Qty: 5">Qty: 5</option>
            </select>
            <hr />
            <p className="action-btn">Delete</p>
            <hr />
            <p className="action-btn">Save for later</p>
            <hr />
            <p className="action-btn">Compare with similar items</p>
            <hr />
            <p className="action-btn">Share</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="product-cart-list">
      <img src={product_img} className="product-cart-img"/>
        <div>
          <div className="product-cart-titleprice">
            <p>
              BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5
              Controller, Noise Cancelling Over Ear Headphones with Mic, LED
              Light, Bass Surround
            </p>
            <p>
              <b>₹2500.99</b>
            </p>
          </div>
          <p className="product-cart-bestseller">
            <span>#1 Best Seller</span> in PC Game Headsets
          </p>
          <p className="product-cart-stock">In Stock</p>
          <p className="product-cart-delivery">
            FREE delivery <b>Mon, Jan 29</b> on ₹35 of items shipped by Amazon
          </p>
          <p className="product-cart-returns">FREE Returns ⮷</p>
          <p className="product-cart-giftoption">
            <input type="checkbox" /> This is a gift <span>Learn more</span>
          </p>
          <div className="product-cart-specs">
            <p>
              <b>Style:</b>
            </p>
            <p>Wired</p>
            <p>
              <b>Size:</b>
            </p>
            <p>Free</p>
            <p>
              <b>Color:</b>
            </p>
            <p>Blue</p>
          </div>
          <div className="product-cart-list-action">
            <select>
              <option value="Qty: 1">Qty: 1</option>
              <option value="Qty: 2">Qty: 2</option>
              <option value="Qty: 3">Qty: 3</option>
              <option value="Qty: 4">Qty: 4</option>
              <option value="Qty: 5">Qty: 5</option>
            </select>
            <hr />
            <p className="action-btn">Delete</p>
            <hr />
            <p className="action-btn">Save for later</p>
            <hr />
            <p className="action-btn">Compare with similar items</p>
            <hr />
            <p className="action-btn">Share</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="cart-list-subtotal">
        Subtotal (2 items): <b>₹27400.99</b>
      </div>
    </div>
    <div className="cart-right">
      <div className="cart-free-delivery">
        <p>✅</p>
        <p>
          Your order qualifies for FREE Shipping. <br /> Choose this option at
          checkout. <br /> See details
        </p>
      </div>
      <p className="cart-subtotal">
        Subtotal (2 items): <b>₹27400.99</b>
      </p>
      <p className="cart-right-gift">
        <input type="checkbox" /> This order contains a gift
      </p>
      <button>Proceed to checkout</button>
    </div>
  </div>
  <section className="products-slider-with-price">
    <h2>You might also like</h2>
    <div className="products">
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_1} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_2} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_3} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_4} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_5} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_6} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_7} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_8} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_9} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_10} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_11} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
      <div className="product-card">
        <div className="product-img-container">
        <img src={product2_12} />
        </div>
        <div className="product-offer">
          <p>27% off</p> <span>Deal</span>
        </div>
        <p className="product-price">
          ₹ <span>1400.49</span> List Price:₹1900.95
        </p>
        <h6>This product is the best for you</h6>
      </div>
    </div>
  </section>


    </div>
  )
}

export default Checkout
