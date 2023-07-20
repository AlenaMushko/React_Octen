import {service} from "./service";
import {urls} from "../constants/urls";

export const commentsService = {
    getAll: () => service.get(urls.comments.base),
    getById: (id, comment) => service.get(urls.comments.byId(id), comment),
}

