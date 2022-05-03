import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdOutlineDehaze, MdLogout } from 'react-icons/md';
import { logout } from '../../store/slices/authSlice';
import authService from '../../Services/authService';
import './header.css';

function Header() {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const [navStile, setNavStyle] = useState('header_nav_list');

    const dropHandler = () => {
        setNavStyle(navStile == 'header_nav_list' ? 'responsive_nav' : 'header_nav_list');
    }

    const clickHandler = () => {
        if (navStile == 'responsive_nav')
            setNavStyle('header_nav_list');
    }

    const logoutHandler = () => {
        clickHandler();
        authService.logout();
        dispatch(logout());
    }

    return (
        <div className='header'>
            <header className='container flex_row'>
                <div className='header_logo'>
                    <NavLink to='/'>Taste It<span> .</span></NavLink>
                </div>
                <nav>
                    <MdOutlineDehaze
                        className='outlines'
                        onClick={dropHandler} />
                    <ul className={navStile}>
                        <li>
                            <NavLink
                                to='/'
                                className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                onClick={clickHandler}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/countries'
                                className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                onClick={clickHandler}>Countries</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                onClick={clickHandler}>About</NavLink>
                        </li>
                        {isLoggedIn && (<>
                            <li>
                                <NavLink
                                    to='/preferences'
                                    className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                    onClick={clickHandler}>My Preferences</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/auth'
                                    className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                    onClick={logoutHandler}><MdLogout />({user.userNameOrEmail})</NavLink>
                            </li>
                        </>)}
                        {!isLoggedIn && (<>
                            <li>
                                <NavLink
                                    to='/auth'
                                    className={(navData) => navData.isActive ? 'nav_link nav_link_active' : 'nav_link'}
                                    onClick={clickHandler}>Login | Register</NavLink>
                            </li>
                        </>)}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
