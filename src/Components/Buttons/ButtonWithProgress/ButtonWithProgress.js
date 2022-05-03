import React from 'react';
import Spinner from '../../Spinner/Spinner';
import './buttonwithprogress.css';

function ButtonWithProgress(props) {
    return (
        <button
            className='btn'
            style={{background:props.background}}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.text}
            {props.showProgress &&
                <Spinner />
            }
        </button>
    );
}

export default ButtonWithProgress;
