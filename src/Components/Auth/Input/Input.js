import React from 'react';
import './input.css';

function Input({ id, value, label, type, hasError, error, onChange }) {
    return (
        <div className='input'>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                onChange={onChange}
                value={value}
                type={type ?? 'text'}
            />
            {
                hasError &&
                <div className='invalid_feedback'>
                    {error}
                </div>
            }
        </div>
    );
}

export default Input;
