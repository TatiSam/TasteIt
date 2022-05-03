import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../../../Services/authService';
import { login as loginAction } from '../../../store/slices/authSlice';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress/ButtonWithProgress';
import Input from '../Input/Input';
import './login.css';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apiErrors, setApiErrors] = useState();
    const [pendingApiCall, setPendingApiCall] = useState(false);
    let disableSubmit = userNameOrEmail === '' || password === '';

    const onChangeUserNameOrEmail = (event) => {
        setUserNameOrEmail(event.target.value);
        setApiErrors();
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
        setApiErrors();
    }
    const onClickLogin = () => {
        setPendingApiCall(true);
        const user = { userNameOrEmail, password };
        authService.login(user)
            .then(response => {
                setPendingApiCall(false);
                dispatch(loginAction(response));
                navigate(-1);
            }).catch(e => {
                setPendingApiCall(false);
                if (e.response && e.response.status) {
                    let errors;
                    if (e.response.status === 401)
                        errors = "Unauthorized";
                    else
                        errors = e.response.data;
                    setApiErrors(errors);
                }
            });
    }

    return (
        <div className='login_block'>
            <h2 className='dancing_font'>Login</h2>
            <Input
                id='userNameOrEmail'
                label='User Name Or Email'
                value={userNameOrEmail}
                onChange={onChangeUserNameOrEmail}
                hasError={apiErrors && true}
            />
            <Input
                id='password'
                value={password}
                label='Password'
                onChange={onChangePassword}
                type='password'
                hasError={apiErrors && true}
            />
            <div className='validation_error'>{apiErrors && apiErrors}</div>
            <ButtonWithProgress
                text="Login"
                disabled={pendingApiCall || disableSubmit}
                showProgress={pendingApiCall}
                onClick={onClickLogin}
            />
        </div>
    );
}

export default Login;
