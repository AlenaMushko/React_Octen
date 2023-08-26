const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const auth = '/auth'
const users = '/users'
const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`,
        photo: (id: number): string => `${cars}/${id}/photo`
    },
    auth: {
        register: users,
        login: auth,
        refresh: `${auth}/refresh`,
        owner: `${auth}/me`
    }
}

export {
    baseURL,
    urls
}
