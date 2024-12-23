export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const endpoints = {
    user: {
        signin: '/user/signin',
        signup: '/user/signup',
        getUser: '/user/profile',
        refreshToken: '/user/refresh-token',
    },
    post: {
        getPostBySlug: '/post/slug',
        getPosts: '/post/list',
        likePost: '/post/like',
        bookmarkPost: '/post/bookmark'
    }
}