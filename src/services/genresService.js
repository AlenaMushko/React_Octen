import {service} from "./service";
import {urls, api_key} from "../constants/urls";

export const genresService = {
    getAll: () => service.get(urls.genres.base + api_key),
}

