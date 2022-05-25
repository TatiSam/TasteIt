import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import useCountries from '../../Hooks/useCountries';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../consts/consts';
import Block from '../../Components/Containers/Block/Block';
import ErrorBlock from '../../Components/ErrorBlock/ErrorBlock';
import CommentList from '../../Components/Comments/CommentList/CommentList';
import GoBackButton from '../../Components/Buttons/GoBackButton/GoBackButton';
import ScrollToTopButton from '../../Components/Buttons/ScrollToTopButton/ScrollToTopButton';
import StarRating from '../../Components/StarRating/StarRating';
import Loader from '../../Components/Loader/Loader';
import './countrypage.css';

function CountryPage() {
    const param = useParams();
    const { loading, hasErrors, countries } = useCountries();
    const country = countries && countries.find(c => c.name == param.id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='content bg_white'>
            <div className='container'>
                <div className='country'>
                    {loading && <Loader />}
                    {hasErrors &&
                        <ErrorBlock />
                    }
                    {country && (<>
                        <GoBackButton />
                        <ScrollToTopButton />
                        <Block
                            resource={country}
                            resourceName={COUNTRY_RESOURCE_NAME}
                            key={country.id} />
                        {country.dishes.map(d =>
                            <Block
                                resource={d}
                                resourceName={DISH_RESOURCE_NAME}
                                key={d.id} />
                        )}
                        <a className='source'
                            href={country.source}
                            target='_blank'>
                            Original source
                        </a>
                        <div>
                            <StarRating
                                countryId={country.id}
                                avgRating={country.averageRating}
                                rateCount={country.rateCount} />
                            <CommentList
                                comments={country.comments}
                                countryId={country.id} />
                        </div>
                    </>)}
                </div>
            </div>
        </div>
    );
}

export default CountryPage;
