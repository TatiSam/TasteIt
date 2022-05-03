import React, { useEffect } from 'react';
import './message.css';

function Message({ text, callBack }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            callBack();
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='message'>
            {text}
        </div>
    );
}

export default Message;
