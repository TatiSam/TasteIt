import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../Services/userService';
import { addDishesToUser } from '../store/slices/userSlice';

const useUserDishes = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { userDishes } = useSelector(state => state.user);
    const [dishesLoading, setDishesLoading] = useState(false);
    const [dishesHasErrors, setDishesHasErrors] = useState(false);

    useEffect(() => {
        if (user && !userDishes) {
            setDishesLoading(true);
            userService.userDishes(user)
                .then(response => {
                    setDishesLoading(false);
                    dispatch(addDishesToUser(response.data));
                }).catch(e => {
                    setDishesLoading(false);
                    setDishesHasErrors(true);
                });
        }
    }, []);

    return { dishesLoading, dishesHasErrors, userDishes };
}

export default useUserDishes;