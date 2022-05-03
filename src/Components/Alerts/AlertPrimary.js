import React, { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './alert.css';

function AlertPrimary({ text, callBack }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            callBack();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='alert alert_primary'>
            <div>
                <BiErrorCircle />
                <p className='alert_text'>{text}</p>
            </div>
            <AiOutlineCloseCircle
                onClick={callBack} />
        </div>
    );
}

export default AlertPrimary;
