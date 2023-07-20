import {service} from "./service";
import {urls} from "../constants/urls";

export const todosService = {
    getAll: () => service.get(urls.todos.base),
}
