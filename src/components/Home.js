import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Make sure to create and style this CSS file
import Contact from './Contact';

function Home() {
    return (

        <>
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">
                    HUNGRY? YOU'RE IN THE RIGHT <span role="img" aria-label="smiley">😊</span> PLACE
                </h1>
                <div className="home-buttons">
                    <Link to="/displayAllItem" className="home-button">
                        View Our Menu
                    </Link>
                    <Link to="/about" className="home-button secondary">
                        See How It Works
                    </Link>
                </div>
            </div>
            <div className="home-image">
                <img src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza Delivery" />
            </div>
           
        </div>
        </>
        

    );
    
}

export default Home;
