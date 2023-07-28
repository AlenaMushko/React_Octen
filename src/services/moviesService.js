import {service} from "./service";
import {urls, api_key} from "../constants/urls";

export const moviesService = {
    getAll: (page) => service.get(urls.movies.base + api_key + `&page=${page}`),
    getById: (id)=> service.get(urls.movieById.base+ `/${id}` + api_key),
    getSoon: (page) => service.get(urls.soon.base + api_key + `&page=${page}`),
    getTv: (page)=>service.get(urls.tv.base+ api_key + `&page=${page}`),
    getAnimation: (page) => service.get(urls.movies.base + api_key + `&page=${page}`+'&with_genres=16'),
    getSearch: (page, searchQuery) => service.get(urls.search.base + api_key + `&query=${searchQuery}&page=${page}`),
}

