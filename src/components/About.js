import React from 'react';
import './about.css';

function About() {
    return (
        <div className="about-container">
            {/* Header Section */}
            <header className="about-header">
                <h1>About</h1>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://yelp.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-yelp"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </header>

            <div className="content-wrapper">
                {/* Text Sections */}
                <div className="text-sections">
                    <section className="mission-section">
                        <h2>The SliceHaven's Mission</h2>
                        <p>
                        SliceHaven's exists as a for-profit hospitality organization that champions unity,
                            development and justice for our guests, our team, and our communities in order
                            to lead the charge in creating a positive, long-lasting impact.
                        </p>
                    </section>

                    <section className="manifesto-section">
                        <h2>The SliceHaven's Manifesto</h2>
                        <p>
                            We see pizza as our crispy, chewy, edible passion – a platform on which we can
                            imagine all our culinary ambitions. And we believe that our pizza can only be
                            as relevant, radical, and creative as the people who make it, support it, and love it.
                        </p>
                        <p>
                            As a people-centric company, every decision we make comes from our employees
                            and stakeholders. We believe that our values are the DNA of our company because
                            they are the DNA of our employees. We hire our staff based on their alignment with
                            these <strong>Core Values</strong> and a passion for community engagement.
                        </p>
                        <p>
                            As a result, though we operate as a for-profit entity, we utilize tenets from
                            not-for-profit businesses in our operations by combining profit maximization with
                            a focus on societal improvement.
                        </p>
                    </section>
                </div>

                {/* Images Section */}
                <div className="images-section">
                    <div className="image-container">
                        <img src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="SliceHaven's Image 1" />
                    </div>
                    <div className="image-container">
                        <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600" alt="SliceHaven's Image 2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
