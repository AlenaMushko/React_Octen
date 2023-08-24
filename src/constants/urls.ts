const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const auth = '/auth'
const users = '/users'
const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    auth:{
        register:users,
        login:auth,
        refresh:`${auth}/refresh`,
        owner:`${auth}/me`
    }
}

export {
    baseURL,
    urls
}
