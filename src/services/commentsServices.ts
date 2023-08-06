import {service} from "./service";
import {urls} from "../constants/urls";

export const commentsService = {
    getAll: () => service.get(urls.comments.base),
    getById: (id:string) => service.get(urls.comments.byId(id)),
}

