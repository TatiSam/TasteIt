import axios from 'axios';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import contentService from '../../Services/contentService';
import AlertError from '../Alerts/AlertError';
import Spinner from '../Spinner/Spinner';
import './starrating.css';

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
    return (
        <FaStar
            color={selected ? '#ff9c07' : '#ccc'}
            onClick={onSelect} />
    );
}

function StarRating({ countryId, avgRating, rateCount, totalStars = 5 }) {
    const [countryRating, setCountryRating] = useState(avgRating);
    const [countryRateCount, setCountryRateCount] = useState(rateCount);
    const [selectedStars, setSelectedStars] = useState(0);
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [apiError, setApiError] = useState();
    const disableSubmit = selectedStars === 0 || pendingApiCall;

    const clearApiError = () => {
        setApiError();
    }

    const onRateHandler = () => {
        axios.get('https://api.db-ip.com/v2/free/self')
            .then(response => {
                const ipAddress = response.data.ipAddress;
                setPendingApiCall(true);
                contentService.rateCountry(ipAddress, countryId, selectedStars)
                    .then(response => {
                        setPendingApiCall(false);
                        setCountryRating(response.data.averageRating);
                        setCountryRateCount(response.data.rateCount);
                    }).catch(e => {
                        setPendingApiCall(false);
                        setApiError(e.message);
                    });
            }).catch(e => {
                setApiError(e.message);
            });
    }

    return (
        <>
            <div className='rating_block'>
                <div>
                    <FaStar className='yellow' />
                    <span>{countryRating}/{totalStars}</span>
                    <span>({countryRateCount})</span>
                </div>
            </div>
            <div className='rating_block'>
                <div className='rating_block_top'>
                    {createArray(totalStars).map((s, i) => <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStars(i + 1)} />
                    )}
                    <div className='rating_block_button'>
                        <button disabled={disableSubmit} onClick={onRateHandler}>
                            Rate
                        </button>
                        {pendingApiCall &&
                            <Spinner />
                        }
                    </div>
                </div>
                {apiError &&
                    <AlertError
                        text={apiError}
                        callBack={clearApiError} />
                }
            </div>
        </>
    );
}

export default StarRating;
