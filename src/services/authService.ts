import {IAuth, ITokens, IUser} from "../interfaces";
import {apiService, IRes} from "./apiService";
import {urls} from "../constants";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

export const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user);
    },

    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data);
        const {data:owner} = await this.owner();
        return owner;
    },

    async refresh(): Promise<void> {
        const refresh = this.getRefreshToken();
        const {data} = await apiService.post<ITokens>(urls.auth.refresh, {refresh});
        this.setTokens(data)
    },

    owner(): IRes<IUser> {
        return apiService.get(urls.auth.owner)
    },

    setTokens({refresh, access}: ITokens): void {
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccesToken(): string {
        return localStorage.getItem(accessTokenKey)
    },

    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey)
    },

    deleteTokens(): void {                         // щоб розлогінитися
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}
