import {apiService} from "./apiService";
import {urls} from "../constants";

export const carService = {
    getAll: () => apiService.get(urls.cars.base),
    postOne: (data) => apiService.post(urls.cars.base, data),
    getById: (id) => apiService.get(urls.cars.byId(id)),
    patchById: (id, data) => apiService.patch(urls.cars.byId(id), data),
    removeById: (id) => apiService.delete(urls.cars.byId(id)),
}


