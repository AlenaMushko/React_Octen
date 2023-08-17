const baseURL = process.env.REACT_APP_API

const characters = '/character';
const episodes = '/episode';

const urls = {
        episodes,
        characters: {
            byId: (id) => `${characters}/${id}`
        }
}

export {
    baseURL,
    urls
}
