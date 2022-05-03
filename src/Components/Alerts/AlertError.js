import React, { useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './alert.css';

function AlertError({ text, callBack }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            callBack();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='alert alert_error'>
            <div>
                <BiError />
                <p className='alert_text'>{text}</p>
            </div>
            <AiOutlineCloseCircle
                onClick={callBack} />
        </div>
    );
}

export default AlertError;
