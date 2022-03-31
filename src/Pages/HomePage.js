import React from 'react';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hey! I am
                    <span> Md. Azizul Bashar</span>
                </h1>
                <p className="h-sub-text">
                    I have studied as well as Web development so that I can keep myself in a good place. I have come a long way in learning web development as well as studying so I believe I can do all your work very easily.
                </p>
                <div className="icons">
                    {/* <Link to="https://github.com/Shahadat-Hossain88" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </Link> */}
                    <a href="#" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/azizul632" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://mail.google.com" className="icon-holder" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="icon gh" />
                    </a>


                </div>
                <div style={{ textAlign: "center"  }}>
                    <a   href="https://drive.google.com/file/d/1_K9XkjXR1s2gPjTMx5gCmNX2nS7JoJL0/view?usp=sharing" target="_blank"> <button className="btn"> Download Resume</button> </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
