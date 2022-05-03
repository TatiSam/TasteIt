import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contentService from '../Services/contentService';
import { addCountries } from '../store/slices/countriesSlice';

const useCountries = () => {
    const dispatch = useDispatch();
    const { countries } = useSelector(state => state.countries);
    const [loading, setLoading] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        if (!countries) {
            setLoading(true);
            contentService.countries()
                .then(response => {
                    setLoading(false);
                    dispatch(addCountries(response.data.content));
                }).catch(e => {
                    setLoading(false);
                    setHasErrors(true);
                });
        };
    }, []);

    return { loading, hasErrors, countries };
}

export default useCountries;