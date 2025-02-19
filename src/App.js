import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Body from './body';
import Checkout from './Checkout';
import Products from './Products';
import Product_1 from './Product_1';
import Signup from './Sign_up';
import Login from './login'; // Renamed login to Login

function App() {
    return (
        <Router>
            <div className="app">
                <Content />
            </div>
        </Router>
    );
}

function Content() {
    const location = useLocation();
    const isSignupPage = location.pathname === '/Sign_up';
    const isLoginPage = location.pathname === '/login'; // Add login page condition

    return (
        <>
            {!isSignupPage && !isLoginPage && <Header />} {/* Hide Header for both signup and login */}
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Product_1" element={<Product_1 />} />
                <Route path="/Sign_up" element={<Signup />} />
                <Route path="/login" element={<Login />} /> {/* Updated to use Login */}
            </Routes>
            {!isSignupPage && !isLoginPage && <Footer />} {/* Hide Footer for both signup and login */}
        </>
    );
}

export default App;
