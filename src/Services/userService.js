import axios from 'axios';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../consts/consts';

const api = axios.create({
    baseURL: 'http://tasteit-env.eba-zcmqefys.us-east-1.elasticbeanstalk.com/api/1/'
});

const addResourceToUser = (user, resourceName, resourceId) => {
    const bearer = `Bearer ${user.jwt}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    }
    const body = { userNameOrEmail: user.userNameOrEmail };
    let path;
    if (resourceName === COUNTRY_RESOURCE_NAME)
        path = `user/countries/${resourceId}`;
    if (resourceName === DISH_RESOURCE_NAME)
        path = `user/dishes/${resourceId}`;
    return api.post(path, body, config);
}

const deleteResourceFromUser = (user, resourceName, resourceId) => {
    const bearer = `Bearer ${user.jwt}`;
    let path;
    if (resourceName === COUNTRY_RESOURCE_NAME)
        path = `user/countries/${resourceId}`;
    if (resourceName === DISH_RESOURCE_NAME)
        path = `user/dishes/${resourceId}`;
    return api.delete(path,
        {
            headers: { 'Authorization': bearer },
            data: { userNameOrEmail: user.userNameOrEmail }
        });
}

const userCountries = (user) => {
    const bearer = `Bearer ${user.jwt}`;
    const headers = { 'Authorization': bearer };
    const params = { userNameOrEmail: user.userNameOrEmail };
    return api.get("user/countries", { params, headers });
}

const userDishes = (user) => {
    const bearer = `Bearer ${user.jwt}`;
    return api.get("user/dishes", {
        params: { userNameOrEmail: user.userNameOrEmail },
        headers: { 'Authorization': bearer }
    });
}

const userService = {
    userCountries,
    userDishes,
    addResourceToUser,
    deleteResourceFromUser
}

export default userService;
