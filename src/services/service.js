import axios from "axios";
import {baseURL} from '../constants/urls';

export const service = axios.create({baseURL});




