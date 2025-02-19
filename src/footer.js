import React from 'react';
import "./footer.css";

function footer() {
    // Function to scroll to the top smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,           // Scroll to the top of the page
        behavior: 'smooth' // Smooth scrolling effect
      });
    };
  return (
    <div>
      <div className="foot-panel1" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        Back to Top
      </div>
  <div className="foot-panel2">
  <ul>
      <p>Get to Know Us</p>
      <p>Careers</p>
      <p>Blog</p>
      <p>About Amazon</p>
      <p>Investor Relations</p>
      <p>Amazon Devices</p>
      <p>Amazon Science</p>
    </ul>
    <ul>
      <p>Make Money with Us</p>
      <p>Sell products on Amazon</p>
      <p>Sell on Amazon Business</p>
      <p>Sell apps on Amazon</p>
      <p>Become an Affiliate</p>
      <p>Advertise Your Products</p>
      <p>Self-Publish with Us</p>
      <p>Host an Amazon Hub</p>
      <p>See More Make Money with Us</p>
    </ul>
    <ul>
      <p>Amazon Payment Products</p>
      <p>Amazon Business Card</p>
      <p>Shop with Points</p>
      <p>Reload Your Balance</p>
      <p>Amazon Currency Converte</p>
    </ul>
    <ul>
      <p>Let Us Help You</p>
      <p>Amazon and COVID-19</p>
      <p>Your Account</p>
      <p>Your Orders</p>
      <p>Shipping Rates &amp; Policies</p>
      <p>Returns &amp; Replacements</p>
      <p>Manage Your Content and Devices</p>
      <p>Amazon Assistant</p>
      <p>Help</p>
    </ul>
  </div>
  <div className="foot-panel3">
    <div className="logoo" />
  </div>
  <div className="foot-panel4">
    <div className="pages">
      <a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5km84u9k2k_e&adgrpid=155259813113&hvpone=&hvptwo=&hvadid=674842289479&hvpos=&hvnetw=g&hvrand=16877935082698148826&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007740&hvtargid=kwd-304880464215&hydadcr=14450_2316420&gad_source=1">Conditions of Use</a>
      <p>Privacy Notice</p>
      <p>Your Ads Privacy Choices</p>
      <div className="copyright">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  </div>
    </div>
  )
}
export default footer;

  

