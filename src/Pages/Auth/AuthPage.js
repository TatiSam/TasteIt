import React, { useState } from 'react';
import Login from '../../Components/Auth/Login/Login';
import Register from '../../Components/Auth/Register/Register';
import './authpage.css';

function AuthPage() {
    const [register, setRegister] = useState(false);

    const onRegisterdHandler = () => {
        setRegister(false);
    }

    return (
        <div className='content container'>
            <div className='auth'>
                {register && (
                    <Register onRegisterd={onRegisterdHandler} />
                )}
                {!register && (<>
                    <Login />
                    <div className='auth_footer'>
                        <span>Not a memeber?</span>
                        <span className='yellow' onClick={() => setRegister(true)}>Register Now</span>
                    </div>
                </>)}
            </div>
        </div>
    );
}

export default AuthPage;
