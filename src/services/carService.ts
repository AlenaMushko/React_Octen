import {apiService} from "./apiService";
import {urls} from "../constants";

export const carService = {
    getAll: () => apiService.get(urls.cars.base),
    postOne: (data:object) => apiService.post(urls.cars.base, data),
    getById: (id:number) => apiService.get(urls.cars.byId(id)),
    updateById: (id:number, data:object) => apiService.put(urls.cars.byId(id), data),
    removeById: (id:number) => apiService.delete(urls.cars.byId(id)),
}


