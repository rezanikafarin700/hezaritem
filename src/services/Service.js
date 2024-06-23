import axios from 'axios';

const SERVER_URL =  'http://localhost:9000';

export const getAllProducts = () => {
    return axios.get(`${SERVER_URL}/products`);
}

export const getProduct = (id) => {
    return axios.get(`${SERVER_URL}/products/${id}`);
}

export const saveProduct = (data) => {
    const url = `${SERVER_URL}/products`;
    return axios.post(url,data);

    //یک روش دیگر استفاده از axios
    // axios({
    //     method: 'post',
    //     url: SERVER_URL + '/products',
    //     data : data
    //   }).then(res => console.log('javab =' ,res.data)).catch(err => console.log(err.message));
}


export const getAllUsers = () => {
    return axios.get(`${SERVER_URL}/users`);
}

export const getUser = (id) => {
    return axios.get(`${SERVER_URL}/users/${id}`);
}
