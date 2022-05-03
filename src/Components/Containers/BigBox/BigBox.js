import React from 'react';
import { NavLink } from 'react-router-dom';
import './bigbox.css';

function BigBox({ country }) {
    const navPath = `/countries/${country.name}`;

    return (
        <div className='bigbox_container'>
            <div className='bigbox_img'>
                <img src={country.imgPath} alt={country.name} />
            </div>
            <div className='bigbox_text'>
                <h2 className='dancing_font'>{country.name}</h2>
                <article>
                    {country.article}
                </article>
                <NavLink className='yellow' to={navPath}>Read more...</NavLink>
            </div>
        </div>
    );
}

export default BigBox;
