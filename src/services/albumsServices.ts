import {service} from "./service";
import {urls} from "../constants/urls";

export const albumsService = {
    getAll: () => service.get(urls.albums.base),
}

