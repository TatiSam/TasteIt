import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import authService from '../../../Services/authService';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress/ButtonWithProgress';
import Input from '../Input/Input';
import './register.css';

function Register(props) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [pendingApiCall, setPendingApiCall] = useState(false);
    let disableSubmit = userName === '' || email === '' || password === '';

    const onChangeUserName = (event) => {
        const err = errors;
        delete err.userName;
        setErrors(err);
        setUserName(event.target.value);
    }

    const onChangeEmail = (event) => {
        const err = errors;
        delete err.email;
        setErrors(err);
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        const err = errors;
        delete err.password;
        setErrors(err);
        setPassword(event.target.value);
    }

    const onChangeConfirmPassword = (event) => {
        const err = errors;
        delete err.confirmPassword;
        setErrors(err);
        setConfirmPassword(event.target.value);
    }

    const onClickRegister = () => {
        if (confirmPassword !== password) {
            setErrors({ confirmPassword: 'Confirm password and Password do not match' });
            return;
        }
        setPendingApiCall(true);
        const user = { userName, email, password };
        authService.register(user)
            .then(() => {
                setPendingApiCall(false);
                props.onRegisterd();
            }).catch(e => {
                setPendingApiCall(false);
                if (e.response && e.response.data) {
                    let err = { ...e.response.data };
                    setErrors(err);
                }
            });
    }

    return (
        <div className='register_block'>
            <IoIosArrowBack className='register_block_goback' onClick={props.onRegisterd} />
            <h2 className='dancing_font'>Register</h2>
            <Input
                id='userName'
                value={userName}
                label='User Name'
                onChange={onChangeUserName}
                hasError={errors.userName && true}
                error={errors.userName}
            />
            <Input
                id='email'
                value={email}
                label='Email'
                onChange={onChangeEmail}
                hasError={errors.email && true}
                error={errors.email}
            />
            <Input
                id='password'
                value={password}
                label='Password'
                onChange={onChangePassword}
                type='password'
                hasError={errors.password && true}
                error={errors.password}
            />
            <Input
                id='confirmPassword'
                value={confirmPassword}
                label='Confirm Password'
                onChange={onChangeConfirmPassword}
                type='password'
                hasError={errors.confirmPassword && true}
                error={errors.confirmPassword}
            />
            <div className='validation_error'>{errors.message}</div>
            <ButtonWithProgress
                text='Register'
                disabled={pendingApiCall || disableSubmit}
                showProgress={pendingApiCall}
                onClick={onClickRegister}
            />
        </div>
    );
}

export default Register;
