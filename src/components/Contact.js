import React from 'react';
import './contact.css'; // Create a CSS file to style the form

const Contact = () => {
    return (
        <div className="contact-form-container">
            <div className="form-section">
                <h2>Send a message</h2>
                <form>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="input-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="input-group">
                        <label>Message</label>
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit">Send Request</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Office Address</h3>
                <p>1421 San Pedro St, Los Angeles, CA 90015</p>
                <p>📞 (123) 456-7890</p>
                <p>📧 SliceHaven@mail.com</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fas fa-rss"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;