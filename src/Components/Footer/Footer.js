import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineFacebook, AiOutlineCopyrightCircle } from 'react-icons/ai';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer_top'>
                <p>GET IN TOUCH</p>
                <div className='footer_top_links'>
                    <div>
                        <AiOutlinePhone className='icon' />
                        <a href='tel:+972 587 28 02 84'>(+972) 587 28 02 84</a>
                    </div>
                    <div>
                        <AiOutlineMail className='icon' />
                        <a href='mailto:tatismoilenko@gmail.com'>tatismoilenko@gmail.com</a>
                    </div>
                    <div>
                        <AiOutlineFacebook className='icon' />
                        <a href='https://www.facebook.com/'>facebook</a>
                    </div>
                </div>
            </div>
            <div className='footer_bottom'>
                <AiOutlineCopyrightCircle /><span>Taste It 2022</span>
            </div>
        </footer>
    );
}

export default Footer;
