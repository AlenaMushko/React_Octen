import {apiService} from "./apiService";
import {urls} from "../constants";

export const episodesService={
    getAll:(page)=>apiService.get(urls.episodes,{params:{page}})
}
