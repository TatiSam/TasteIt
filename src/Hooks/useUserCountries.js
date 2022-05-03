import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../Services/userService';
import { addCountriesToUser } from '../store/slices/userSlice';

const useUserCountries = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { userCountries } = useSelector(state => state.user);
    const [countriesLoading, setCountriesLoading] = useState(false);
    const [countriesHasErrors, setCountriesHasErrors] = useState(false);

    useEffect(() => {
        if (user && !userCountries) {
            setCountriesLoading(true);
            userService.userCountries(user)
                .then(response => {
                    setCountriesLoading(false);
                    dispatch(addCountriesToUser(response.data));
                }).catch(e => {
                    setCountriesLoading(false);
                    setCountriesHasErrors(true);
                });
        }
    }, []);

    return { countriesLoading, countriesHasErrors, userCountries };
}

export default useUserCountries;