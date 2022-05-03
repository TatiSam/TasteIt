import React, { useEffect } from 'react';
import useRandomCountry from '../../Hooks/useRandomCountry';
import BigBox from '../../Components/Containers/BigBox/BigBox';
import SmallBoxContainer from '../../Components/Containers/SmallBoxContainer/SmallBoxContainer';
import ErrorBlock from '../../Components/ErrorBlock/ErrorBlock';
import Loader from '../../Components/Loader/Loader';
import './homepage.css';

function HomePage() {
    const { loading, hasErrors, randomCountry } = useRandomCountry();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='content container'>
            <div className='home'>
                {loading && <Loader />}
                {hasErrors &&
                    <ErrorBlock />
                }
                {randomCountry && (<>
                    <BigBox country={randomCountry} />
                    <SmallBoxContainer country={randomCountry} />
                </>)}
            </div>
        </div>
    );
}

export default HomePage;
