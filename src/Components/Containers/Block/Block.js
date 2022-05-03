import React from 'react';
import { useSelector } from 'react-redux';
import useUserCountries from '../../../Hooks/useUserCountries';
import useUserDishes from '../../../Hooks/useUserDishes';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../../consts/consts';
import LikeButton from '../../Buttons/LikeButton/LikeButton';
import './block.css';

function Block({ resource, resourceName }) {
    const { isLoggedIn } = useSelector(state => state.auth);
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
    };
    const isSelected = isLoggedIn && userResources && userResources.find(r => r.id === resource.id);

    return (
        <div className='block'>
            <div className='block_top'>
                <h2 className='yellow dancing_font'>{resource.name}</h2>
                {isLoggedIn && userResources &&
                    <LikeButton
                        resourceName={resourceName}
                        resourceId={resource.id}
                        isSelected={isSelected} />
                }
                {!isLoggedIn &&
                    <LikeButton
                        resourceName={resourceName}
                        resourceId={resource.id}
                        isSelected={isSelected} />
                }
            </div>
            <img src={resource.imgPath} alt={resource.name} />
            <p>{resource.article}</p>
        </div>
    );
}

export default Block;
