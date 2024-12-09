const { default: axios } = require("axios");


const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
});


const http = {
    get: instance.get,
    patch: instance.patch,
    put: instance.put,
    delete: instance.delete,
    post: instance.post
}

export default http;