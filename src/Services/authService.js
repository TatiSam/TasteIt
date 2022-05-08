import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tasteit-env-1.eba-ccgwvped.us-east-1.elasticbeanstalk.com/api/1/'
});

const register = (user) => {
    return api.post('/auth/signup', user);
}

const login = (user) => {
    return api.post('/auth/login', user)
        .then((response) => {
            if (response && response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    login,
    logout
}

export default authService;
