import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import './gobackbutton.css';

function GoBackButton() {
    const navigate = useNavigate();

    return (
        <BsFillArrowLeftSquareFill
            className='go_back_btn'
            onClick={() => navigate(-1)}
            title='Go Back' />
    );
}

export default GoBackButton;
