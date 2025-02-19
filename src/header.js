import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import usFlag from "./images/us_flag.png";
import dropdownIcon from "./images/dropdown_icon.png";

function Header() {
  const currentUrl = window.location.href;

  return (
    <div className="main-panel">
    <div className="nav-bar">
      <a href={currentUrl}>
        <div className="nav-logo border">
          <div className="logo" />
        </div>
      </a>
      <div className="nav-address border">
        <div className="add-first">Deliver to</div>
        <div className="add-sec">
          <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          India
        </div>
      </div>

      <div className="nav-search">
        <label
          id="searchDropdownDescription"
          htmlFor="searchDropdownBox"
          className="nav-progressive-attribute"
          style={{ display: "none" }}
        >
          Select the department you want to search in
        </label>
        <select
          aria-describedby="searchDropdownDescription"
          className="nav-search-dropdown searchSelect nav-progressive-attribute nav-progressive-search-dropdown"
          data-nav-digest="hhziVplHAm5p3dKrw6I8PjH3ToE="
          data-nav-selected="0"
          id="searchDropdownBox"
          name="url"
          style={{ display: "block", top: "2.5px" }}
          tabIndex="0"
          title="Search in"
          defaultValue="search-alias=aps"
        >
          <option value="search-alias=aps">All</option>
          <option value="search-alias=alexa-skills">All Categories</option>
          <option value="search-alias=alexa-skills">Alexa Skills</option>
          <option value="search-alias=amazon-devices">Amazon Devices</option>
          <option value="search-alias=fashion">Amazon Fashion</option>
          <option value="search-alias=nowstore">Amazon Fresh</option>
          <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
          <option value="search-alias=appliances">Appliances</option>
          <option value="search-alias=mobile-apps">Apps & Games</option>
          <option value="search-alias=audible">Audible Audiobooks</option>
          <option value="search-alias=baby">Baby</option>
          <option value="search-alias=beauty">Beauty</option>
          <option value="search-alias=stripbooks">Books</option>
          <option value="search-alias=automotive">Car & Motorbike</option>
          <option value="search-alias=apparel">Clothing & Accessories</option>
          <option value="search-alias=collectibles">Collectibles</option>
          <option value="search-alias=computers">Computers & Accessories</option>
          <option value="search-alias=todays-deals">Deals</option>
          <option value="search-alias=electronics">Electronics</option>
          <option value="search-alias=furniture">Furniture</option>
          <option value="search-alias=lawngarden">Garden & Outdoors</option>
          <option value="search-alias=gift-cards">Gift Cards</option>
          <option value="search-alias=grocery">Grocery & Gourmet Foods</option>
          <option value="search-alias=hpc">Health & Personal Care</option>
          <option value="search-alias=kitchen">Home & Kitchen</option>
          <option value="search-alias=industrial">Industrial & Scientific</option>
          <option value="search-alias=jewelry">Jewellery</option>
          <option value="search-alias=digital-text">Kindle Store</option>
          <option value="search-alias=luggage">Luggage & Bags</option>
          <option value="search-alias=luxury-beauty">Luxury Beauty</option>
          <option value="search-alias=dvd">Movies & TV Shows</option>
          <option value="search-alias=digital-music">MP3 Music</option>
          <option value="search-alias=popular">Music</option>
          <option value="search-alias=mi">Musical Instruments</option>
          <option value="search-alias=office-products">Office Products</option>
          <option value="search-alias=pets">Pet Supplies</option>
          <option value="search-alias=instant-video">Prime Video</option>
          <option value="search-alias=shoes">Shoes & Handbags</option>
          <option value="search-alias=software">Software</option>
          <option value="search-alias=sporting">Sports, Fitness & Outdoors</option>
          <option value="search-alias=specialty-aps-sns">Subscribe & Save</option>
          <option value="search-alias=home-improvement">Tools & Home Improvement</option>
          <option value="search-alias=toys">Toys & Games</option>
          <option value="search-alias=under-ten-dollars">Under ₹500</option>
          <option value="search-alias=videogames">Video Games</option>
          <option value="search-alias=watches">Watches</option>
        </select>
        <input placeholder="Search Amazon.in" className="search-input" />
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>

      <div className="language border">
        <div className="dropdown">
          <img src={usFlag} width="25px" alt="US Flag" className="flag-icon" />
          <button className="dropbtn">EN</button>
          <img src={dropdownIcon} width="10px" alt="Dropdown Icon" />
          <div className="dropdown-content">
            <label>
              <input type="radio" name="option" value="Option 1" /> English - EN
            </label>
            <label>
              <input type="radio" name="option" value="Option 1" /> తెలుగు - TEL
            </label>
            <label>
              <input type="radio" name="option" value="Option 2" /> हिन्दी - HIN
            </label>
            <label>
              <input type="radio" name="option" value="Option 3" /> தமிழ் - TA
            </label>
            <label>
              <input type="radio" name="option" value="Option 2" /> ಕನ್ನಡ - KAN
            </label>
            <label>
              <input type="radio" name="option" value="Option 3" /> മലയാളം - MAL
            </label>
            <label>
              <input type="radio" name="option" value="Option 1" /> বাংলা - BEN
            </label>
            <label>
              <input type="radio" name="option" value="Option 2" /> मराठी - MAR
            </label>
          </div>
        </div>
      </div>

      <div className="nav-signin border">
        <a href="/login">
          <FontAwesomeIcon icon={faUser} />
          <span>Hello, sign in</span>
          <div className="nav-second">
            Account & Lists
            <img
              src={dropdownIcon}
              width="10px"
              alt="Dropdown Icon"
              style={{ marginLeft: "5px" }}
            />
          </div>
        </a>
      </div>
      <div className="nav-return border">
        <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5km84u9k2k_e&adgrpid=155259813113&hvpone=&hvptwo=&hvadid=674842289479&hvpos=&hvnetw=g&hvrand=16877935082698148826&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007740&hvtargid=kwd-304880464215&hydadcr=14450_2316420&gad_source=1">
          <span>Returns</span>
          <div className="nav-second">& Orders</div>
        </a>
      </div>
      <div className="nav-cart border">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <a
          href="/Checkout"
          style={{ color: "white", textDecoration: "none" }}
        >
          Cart
        </a>
      </div>
      </div>
    <div className="panel">
    <div className="panel-all border">
        <i className="fa-solid fa-bars"></i>
        All
    </div>
    <div className="panel-ops border">
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Discount Sale</p>
        <p>Gift Cards</p>
        <p>Sell</p>
        <p>Best Seller</p>
        <p>New Releases</p>
        <p>Home & Kitchen</p>
        <p>Fashion</p>
        <p>Amazon Pay</p>
        <p>Books</p>
        <p>Car & Motorbikes</p>
        <p>Prime</p>
    </div>
    <div className="panel-deals">
        Shop Deals in Electronics
    </div>
</div>
</div>
  );
}

export default Header;
