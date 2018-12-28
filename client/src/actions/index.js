import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const GET_POST = 'get_post';
export const DELETE_POST = 'delete_post';

export const FETCH_COMMENTS = 'fetch_comments';
export const CREATE_COMMENTS = 'create_comments';
export const GET_COMMENT = 'get_comment';
export const DELETE_COMMENT = 'delete_comment';

export function fetchPosts() {

    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    const request = axios.get('blog/')
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post('/blog/create', values)
        .then(() => callback());
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function getPost(id) {
    const request = axios.get(`/blog/${id}`)
    return {
        type: GET_POST,
        payload: request
    };
}
export function deletePost(id, callback) {
    const request = axios.delete(`/blog/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
        // think about what you're returning - simply the id so that it can be worked in the reducer;
        // don't forget to add a callback here as well to direct the user to the main page
    };

    // COMMENT ACTIONS
}
export function fetchComments() {

    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    const request = axios.get('comment/')
    return {
        type: FETCH_COMMENTS,
        payload: request
    };
}
export function createComment(values, callback) {
    const request = axios.post('/blog/comment/new', values)
        .then(() => callback());
    return {
        type: CREATE_COMMENTS,
        payload: request
    };
}
export function getComment(id) {
    const request = axios.get(`/comment/${id}`)
    return {
        type: GET_COMMENT,
        payload: request
    };
}
export function deleteComment(id, callback) {
    const request = axios.delete(`/comment/${id}`)
        .then(() => callback());

    return {
        type: DELETE_COMMENT,
        payload: id
        // think about what you're returning - simply the id so that it can be worked in the reducer;
        // don't forget to add a callback here as well to direct the user to the main page
    };
}
