import { endpoints } from "constants/apiUrl";
import http from "./httpService";
const { post: postEndpoints } = endpoints;
export async function getPostBySlugApi(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${postEndpoints.getPostBySlug}/${slug}`);
    const { data } = await res.json();
    const { post } = data || {}
    return post
}

export async function getPostsApi(queries, options) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${postEndpoints.getPosts}?${queries}`, options);
    const { data } = await res.json();
    const { posts } = data || {}
    return posts
}

export async function likePostApi(postId) {
    return http.post(`${postEndpoints.likePost}/${postId}`).then(({ data }) => data.data)
}

export async function bookmarkPostApi(postId) {
    return http.post(`${postEndpoints.bookmarkPost}/${postId}`).then(({ data }) => data.data)
}