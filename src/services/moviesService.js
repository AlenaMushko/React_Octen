import {service} from "./service";
import {urls, api_key} from "../constants/urls";

export const moviesService = {
    getAll: (page) => service.get(urls.movies.base + api_key + `&page=${page}`),
}
