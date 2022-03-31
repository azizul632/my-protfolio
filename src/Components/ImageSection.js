import React from 'react';
import about from '../img/me.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>Hey! I am<span> Md. Azizul Bashar</span></h4>
                <p className="about-text">
                    I have studied as well as Web development so that I can keep myself in a good place. I have come a long way in learning web development as well as studying so I believe I can do all your work very easily.
                </p>
                <div className="about-details">
                    {/* <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Lorem Ipsum</p>
                        <p>: 50</p>
                        <p>: French</p>
                        <p>: French, Spanish, English</p>
                        <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
                        <p>: France, Spain, Germany</p>
                    </div> */}
                </div>
                <a href="https://drive.google.com/file/d/1_K9XkjXR1s2gPjTMx5gCmNX2nS7JoJL0/view?usp=sharing" target="_blank"> <button className="btn"> Download Resume</button> </a>
                
            </div>
        </div>
    )
}

export default ImageSection;
