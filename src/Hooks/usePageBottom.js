import { useState, useEffect } from 'react';

const usePageBottom = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const delta = document.documentElement.offsetHeight
                - (window.innerHeight + document.documentElement.scrollTop);
            const isBottom = delta <= -100;
            setBottom(isBottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return bottom;
}

export default usePageBottom;