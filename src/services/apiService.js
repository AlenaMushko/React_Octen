import axios from "axios";

const baseURL = process.env.REACT_APP_API;

const apiService = axios.create({baseURL});

export {
    apiService
}
