import React from 'react';
import SmallBox from '../SmallBox/SmallBox';
import './smallboxcontainer.css';

function SmallBoxContainer({ country }) {
    return (
        <div className='box_container'>
            <SmallBox
                dish={country.dishes[0]} />
            <SmallBox
                dish={country.dishes[1]} />
            <SmallBox
                dish={country.dishes[2]} />
        </div>
    );
}

export default SmallBoxContainer;

