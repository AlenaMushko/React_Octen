const baseURL = process.env.REACT_APP_API

const cars = '/cars'

const urls = {
    cars: {
        base: cars,
        byId: (id:number) => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}
