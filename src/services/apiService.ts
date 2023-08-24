import axios, {AxiosError, AxiosResponse} from "axios";
import {baseURL, urls} from "../constants";
import {authService} from "./authService";

type IRes<DATA> = Promise<AxiosResponse<DATA>>

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(req => {
    const access = authService.getAccesToken();

    if (access) {
        req.headers.Authorization = `Bearer ${access}`
    }

    return req
})

let isRefreshing = false

type IWaitList = () => void
const waitList: IWaitList[] = []
apiService.interceptors.response.use(res => {
        return res
    }, async (error: AxiosError) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    await authService.refresh();
                    isRefreshing = false;
                    afterRefresh();
                    return apiService(originalRequest);
                } catch (e) {
                    authService.deleteTokens();
                    isRefreshing = false;
                    // router.navigate('/login?SessionExpired=true') //Uncaught ReferenceError: Cannot access 'router' before initialization
                    return Promise.reject(error)
                }
            }

            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error)
            }

            return new Promise(resolve => {
                subscribeToWaitList(() => resolve(apiService(originalRequest)))
            })
        }

        return Promise.reject(error)
    }
);

const subscribeToWaitList = (cb: IWaitList): void => {
    waitList.push(cb)
}

const afterRefresh = (): void => {
    while (waitList.length) {
        const cb = waitList.pop();
        cb()
    }
}

export type {
    IRes
}
export {
    apiService
}
