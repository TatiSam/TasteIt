import React from 'react';
import useUserDishes from '../../Hooks/useUserDishes';
import useUserCountries from '../../Hooks/useUserCountries';
import ListItem from './ListItem';
import ScrollToTopButton from '../Buttons/ScrollToTopButton/ScrollToTopButton';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../consts/consts';
import './list.css';

function List({ resources, resourceName }) {
    const { userCountries } = useUserCountries();
    const { userDishes } = useUserDishes();

    let userResources;
    switch (resourceName) {
        case COUNTRY_RESOURCE_NAME:
            userResources = userCountries;
            break;
        case DISH_RESOURCE_NAME:
            userResources = userDishes;
            break;
    }

    return (
        <div className='content bg_white'>
            <div className='container'>
                <div className='country_list'>
                    <ScrollToTopButton />
                    {resources.map((r) =>
                        <ListItem
                            resource={r}
                            resourceName={resourceName}
                            userResources={userResources}
                            key={r.id} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default List;
