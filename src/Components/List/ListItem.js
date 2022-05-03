import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../consts/consts';
import LikeButton from '../Buttons/LikeButton/LikeButton';
import './listitem.css';

function ListItem({ resource, resourceName, userResources }) {
    const { isLoggedIn } = useSelector(state => state.auth);
    const isSelected = userResources && userResources.find(r => r.id === resource.id);
    const navPath = `/countries/${resource.name}`;

    return (
        <div className='list_item'>
            <div className='list_item_text'>
                <div>
                    <h2 className='dancing_font'>{resource.name}</h2>
                    {isLoggedIn && userResources &&
                        <LikeButton
                            resourceName={resourceName}
                            resourceId={resource.id}
                            isSelected={isSelected} />
                    }
                </div>
                {resourceName === COUNTRY_RESOURCE_NAME &&
                    <>
                        <article className='list_item_long_article'>{resource.article}</article>
                        <NavLink className='btn_yellow' to={navPath}>Read more</NavLink>
                    </>
                }
                {resourceName === DISH_RESOURCE_NAME &&
                    <article>{resource.article}</article>
                }
            </div>
            <div className='list_item_img'>
                <img src={resource.imgPath} alt={resource.name} />
            </div>
        </div>
    );
}

export default ListItem;