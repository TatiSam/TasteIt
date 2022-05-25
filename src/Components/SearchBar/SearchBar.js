import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import contentService from '../../Services/contentService';
import './searchbar.css';

function SearchBar() {
    const [showSearchBlock, setShowSearchBlock] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [apiError, setApiError] = useState();
    const [result, setResult] = useState();
    const navPath = `/countries/${result}`;
    const disableSubmit = searchText.length < 2;

    const onChangeSearchValue = (event) => {
        clearSearch();
        setSearchText(event.target.value);
    }

    const onClickSearchBtn = () => {
        contentService.countryByName(searchText)
            .then(response => {
                setResult(response.data.name);
            }).catch(e => {
                if (e.response && e.response.data && e.response.data.message)
                    setApiError(e.response.data.message);
            })
    }

    const onClickCloseBtn = () => {
        clearSearch();
        setShowSearchBlock(false);
    }

    const onClickNavLink = () => {
        clearSearch();
        setShowSearchBlock(false);
    }

    const clearSearch = () => {
        setResult();
        setSearchText('');
        setApiError();
    }

    return (
        <div className='search'>
            <div
                className='search_icon'
                onClick={() => setShowSearchBlock(true)}>
                <BiSearchAlt />
            </div>
            {showSearchBlock &&
                <div className='search_block'>
                    <div>
                        <div>
                            <input
                                type='text'
                                placeholder='Search country...'
                                value={searchText}
                                onChange={onChangeSearchValue}
                            />
                            <button
                                className='search_btn'
                                type="submit"
                                disabled={disableSubmit}
                                onClick={onClickSearchBtn}>
                                <BiSearchAlt />
                            </button>
                        </div>
                        <button
                            className='close_btn'
                            onClick={onClickCloseBtn}>
                            <AiOutlineCloseSquare />
                        </button>
                    </div>
                    <div className='search_block_result'>
                        {result && <NavLink to={navPath} onClick={onClickNavLink}>{result}</NavLink>}
                        {apiError && <p>{apiError}</p>}
                    </div>
                </div>
            }
        </div>
    );
}

export default SearchBar;
