import {service} from "./service";
import {urls, api_key} from "../constants/urls";

export const moviesService = {
    getAll: () => service.get(urls.movies.base + api_key),
    // getById: (id, comment) => service.get(urls.comments.byId(id), comment),

}
