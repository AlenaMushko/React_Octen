const baseURL = 'https://api.themoviedb.org/3/';
const KEY = '8d41be39d2696eeff12b89d916a6c984';
const api_key = `?api_key=${KEY}`;

const movies = '/movies';
const genres = '/genres';

// const comments = '/comments';

const urls = {
    movies : {
        base: movies,
    },
    genres : {
        base: genres,
    },
    // comments: {
    //     base: comments,
    //     byId: (id) => `${comments}/${id}`
    // }
}

export {
    baseURL,
    api_key,
    urls,
}