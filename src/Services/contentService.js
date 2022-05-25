import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tasteit-env-1.eba-ccgwvped.us-east-1.elasticbeanstalk.com/api/1/'
});

const countries = () => {
    return api.get('/countries/page');
}

const countryById = (id) => {
    return api.get(`/countries/${id}`);
}

const countryByName = (name) => {
    return api.get(`/countries/name/${name}`);
}

const randomCountry = () => {
    return api.get('/countries/random');
}

const rateCountry = (ipAddress, id, rating) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = {
        ip: ipAddress,
        "rating": rating
    };
    return api.post(`/countries/${id}/rating`, body, config);
}

const postComment = (user, countryId, comment) => {
    const bearer = `Bearer ${user.jwt}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    }
    const path = `/countries/${countryId}/comments`;
    return api.post(path, comment, config);
}

const updateComment = (user, commentId, comment) => {
    const bearer = `Bearer ${user.jwt}`;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    }
    let path = `comments/${commentId}`;
    return api.put(path, comment, config);
}

const deleteComment = (user, commentId) => {
    const bearer = `Bearer ${user.jwt}`;
    let path = `comments/${commentId}`;
    return api.delete(path,
        {
            headers: { 'Authorization': bearer }
        });
}

const contentService = {
    countries,
    countryById,
    countryByName,
    randomCountry,
    rateCountry,
    postComment,
    updateComment,
    deleteComment
}

export default contentService;
