import {apiService} from "./apiService";
import {urls} from "../constants";

export const  characterService={
    getById:(id)=> apiService.get(urls.characters.byId(id))
};
