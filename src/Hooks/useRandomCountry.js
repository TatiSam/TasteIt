import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contentService from '../Services/contentService';
import { addRandomCountry } from '../store/slices/countriesSlice';

const useRandomCountry = () => {
    const dispatch = useDispatch();
    const { randomCountry } = useSelector(state => state.countries);
    const [loading, setLoading] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        if (!randomCountry) {
            setLoading(true);
            contentService.randomCountry()
                .then(response => {
                    setLoading(false);
                    dispatch(addRandomCountry(response.data));
                }).catch(e => {
                    setLoading(false);
                    setHasErrors(true);
                });
        }
    }, []);

    return { loading, hasErrors, randomCountry };
}

export default useRandomCountry;