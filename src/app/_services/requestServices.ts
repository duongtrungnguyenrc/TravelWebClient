import axios from "axios";

const instance = axios.create({
    baseURL: 'https://travel-vn-2d9d9b5f33e3.herokuapp.com/api/',
});

export default instance;