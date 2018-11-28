import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const GET_POST = 'get_post';
export const DELETE_POST = 'delete_post';

export function fetchPosts() {

    // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    const request = axios.get( 'blog/')
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = axios.post('/blog/create', values)
    .then(() => callback ());
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function getPost(id){
    const request = axios.get(`/blog/${id}`)   
    return {
        type: GET_POST,
        payload: request
    };
}
export function deletePost (id, callback){
    const request = axios.delete(`/blog/${id}`)   
    .then(()=> callback());

    return{
        type: DELETE_POST,
        payload: id
    // think about what you're returning - simply the id so that it can be worked in the reducer;
    // don't forget to add a callback here as well to direct the user to the main page
    };
}
