const baseURL = 'https://api.themoviedb.org/3/discover';
const KEY = '8d41be39d2696eeff12b89d916a6c984';

const api_key = `?api_key=${KEY}`;

const movie = '/movie';
const genres = '/genres';

const urls = {
    movies : {
        base: movie,
    },
    genres : {
        base: genres,
    }
}

export {
    baseURL,
    api_key,
    urls,
};
