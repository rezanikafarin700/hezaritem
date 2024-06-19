import axios from 'axios';

const SERVER_URL =  'http://localhost:9000';

export const getAllProducts = () => {
    return axios.get(`${SERVER_URL}/products`);
}

export const getProduct = (id) => {
    return axios.get(`${SERVER_URL}/products/${id}`);
}

export const getAllUsers = () => {
    return axios.get(`${SERVER_URL}/users`);
}

export const getUser = (id) => {
    return axios.get(`${SERVER_URL}/users/${id}`);
}
