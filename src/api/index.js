import axios from 'axios';

const url = 'https://preservebackend.onrender.com/posts';

export const fetchPosts = () => axios.get(url);
console.log(fetchPosts)

export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);