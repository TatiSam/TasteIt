import React from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import usePageBottom from '../../../Hooks/usePageBottom';
import './scrolltotopbutton.css';

function ScrollToTopButton() {
    const isBottom = usePageBottom();

    return (<>
        {isBottom &&
            <BsFillArrowUpSquareFill
                className='scroll_to_top_btn'
                title='Scroll to top'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        }
    </>);
}

export default ScrollToTopButton;
