import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://travel-vn-2d9d9b5f33e3.herokuapp.com/api/',
    // baseURL: 'https://travel-vn.onrender.com/api/',
    baseURL: "http://localhost:8080/api/"
});

export default instance;