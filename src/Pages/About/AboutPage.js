import React from 'react';
import img from '../../Assets/about.jpg';
import './aboutpage.css';

function AboutPage() {
    return (
        <div className='content bg_white'>
            <div className='container'>
                <div className='about'>
                    <h2>About Taste It</h2>
                    <p>Taste It is a website for travelers
                        that like delicios food, and want to taste most popular dishes
                        in the word. You can find here information about world countries
                        and their popular traditional dishes.</p>
                    <img src={img} alt='food' />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
