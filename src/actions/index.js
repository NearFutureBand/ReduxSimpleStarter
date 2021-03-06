import axios from 'axios';

export const FETCH_POSTS = 'fetch-posts';
export const CREATE_POST = 'create-post';
export const FETCH_POST = 'fetch-post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAP';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then( () => callback());
    
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    }
}