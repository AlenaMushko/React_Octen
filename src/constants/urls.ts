const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos';
const comments = '/comments';
const albums = '/albums';

const urls = {
    todos: {
        base: todos,
    },
    albums: {
        base: albums,
    },
    comments: {
        base: comments,
        byId: (id:string) => `${comments}/${id}`
    }
}

export {
    baseURL,
    urls
}
