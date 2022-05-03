import React, { useState } from 'react';
import useUserCountries from '../../Hooks/useUserCountries';
import useUserDishes from '../../Hooks/useUserDishes';
import List from '../../Components/List/List';
import ErrorBlock from '../../Components/ErrorBlock/ErrorBlock';
import Loader from '../../Components/Loader/Loader';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../consts/consts';
import './preferencespage.css';

function PreferencesPage() {
    const { countriesLoading, countriesHasErrors, userCountries } = useUserCountries();
    const { dishesLoading, dishesHasErrors, userDishes } = useUserDishes();
    const [countriesActive, setCountriesActive] = useState(true);
    const [dishesActive, setDishesActive] = useState(false);
    const countriesStyle = countriesActive ? 'preferences_top_active' : '';
    const dishesStyle = dishesActive ? 'preferences_top_active' : '';

    const clickHandler = () => {
        setCountriesActive(!countriesActive);
        setDishesActive(!dishesActive);
    }

    return (
        <div className='content bg_white'>
            <div className='container'>
                <div className='preferences'>
                    {countriesLoading && dishesLoading &&
                        <Loader />
                    }
                    {(countriesHasErrors || dishesHasErrors) &&
                        <ErrorBlock />
                    }
                    {userCountries && userDishes &&
                        <>
                            <div className='preferences_top'>
                                <h2 className={countriesStyle} onClick={clickHandler}>
                                    Countries
                                </h2>
                                <span>|</span>
                                <h2 className={dishesStyle} onClick={clickHandler}>
                                    Dishes
                                </h2>
                            </div>
                            {countriesActive && <>
                                {userCountries.length == 0 &&
                                    <p>You don't have any preferences in Countries</p>
                                }
                                <List
                                    resources={userCountries}
                                    resourceName={COUNTRY_RESOURCE_NAME} />
                            </>}
                            {dishesActive && <>
                                {userDishes.length == 0 &&
                                    <p>You don't have any preferences in Dishes</p>
                                }
                                <List
                                    resources={userDishes}
                                    resourceName={DISH_RESOURCE_NAME} />
                            </>}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default PreferencesPage;
