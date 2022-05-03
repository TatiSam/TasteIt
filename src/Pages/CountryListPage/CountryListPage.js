import React from 'react';
import useCountries from '../../Hooks/useCountries';
import List from '../../Components/List/List';
import ErrorBlock from '../../Components/ErrorBlock/ErrorBlock';
import Loader from '../../Components/Loader/Loader';
import { COUNTRY_RESOURCE_NAME } from '../../consts/consts';
import './countrylistpage.css';

function CountryListPage() {
    const { loading, hasErrors, countries } = useCountries();

    return (
        <div className='content bg_white'>
            <div className='container'>
                {loading && <Loader />}
                {hasErrors &&
                    <ErrorBlock />
                }
                {countries &&
                    <List
                        resources={countries}
                        resourceName={COUNTRY_RESOURCE_NAME} />
                }
            </div>
        </div>
    );
}

export default CountryListPage;
