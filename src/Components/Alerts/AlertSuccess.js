import React, { useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import './alert.css';

function AlertSuccess({ text, callBack }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            callBack();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='alert alert_success'>
            <div>
                <AiOutlineCheckCircle />
            </div>
            <p className='alert_text'>{text}</p>
            <AiOutlineCloseCircle
                onClick={callBack} />
        </div>
    );
}

export default AlertSuccess;
