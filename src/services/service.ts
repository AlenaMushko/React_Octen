import axios from "axios";

import {baseURL1, baseURL2} from '../constants/urls';

export const serviceJson = axios.create({baseURL: baseURL1});
export const serviceCars = axios.create({baseURL: baseURL2});






