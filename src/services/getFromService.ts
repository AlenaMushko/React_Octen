import {serviceJson, serviceCars} from "./service";
import {urls} from "../constants/urls";

export const getFromService = {
    getAllCars: () => serviceCars.get(urls.cars.base),
    getAllComments: () => serviceJson.get(urls.comments.base),
    getAllPosts: () => serviceJson.get(urls.posts.base),
}

