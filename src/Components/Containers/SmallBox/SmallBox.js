import React from 'react';
import './smallbox.css';

function SmallBox({ dish }) {
    return (
        <div className='smallbox_container'>
            <div className='smallbox_img'>
                <img src={dish.imgPath} alt={dish.name} />
            </div>
            <div className='smallbox_title'>
                <h3 className='dancing_font'>{dish.name}</h3>
            </div>
        </div>
    );
}

export default SmallBox;
