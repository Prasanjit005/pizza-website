import React from 'react';
import './footer.css';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="logo-section">
            <div className="logo">S</div>
            <div className="brand-name">SliceHaven.</div>
          </div>
          <p className="footer-text">
          "Crafting Delicious Pizzas Since [1990].
          Fresh Ingredients, Authentic Flavors, Delivered to Your Doorstep.</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Page</h4>
          <ul className="footer-links">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link" to="/updateItem">UpdateItem</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>

          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Information</h4>
          <ul className="footer-links">
          <Link className="nav-link " to="/About">About</Link>
       
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Get in touch</h4>
          <address>
            2972 Westheimer Rd.<br />
            Santa Ana, Illinois 85486<br />
            SliceHaven@gmail.com<br />
            +123 4567 8901
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
