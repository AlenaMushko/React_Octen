import axios from 'axios';
import {Endpoints, JSONPLACEHOLDER_BASEURL} from "../api/endpoints";


const jsonplaceholderAxios = axios.create({
    baseURL: JSONPLACEHOLDER_BASEURL
});

// axios.defaults.baseURL = JSONPLACEHOLDER_BASEURL;

export const postUser = async (user) => {
    console.log(JSONPLACEHOLDER_BASEURL)
    try {
        const {data} = await jsonplaceholderAxios.post(Endpoints.USERS,
            user, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export const postComment = async (comment) => {
    console.log(JSONPLACEHOLDER_BASEURL)
    console.log(Endpoints.COMMENTS)
    console.log(comment)
    try {
        const {data} = await jsonplaceholderAxios.post(Endpoints.COMMENTS,
            comment, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        return data;
    } catch (err) {
        console.log(err.message);
    }
}


