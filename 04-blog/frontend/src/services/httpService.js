import { BASE_URL, endpoints } from "constants/apiUrl";

const { default: axios } = require("axios");
const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

instance.interceptors.request.use(
    res => res,
    err => Promise.reject(err)
)

instance.interceptors.response.use(
    res => res,
    async (err) => {
        // 401 => Not Athorized
        const originalConfig = err.config
        if (err.response.status === 401 && !originalConfig) {
            originalConfig._retry = true;
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoints.user.refreshToken}`, {
                    withCredentials: true
                })
                if (data) return app(originalConfig)

            } catch (error) {
                return Promise.reject(error)
            }
        }
        return Promise.reject(err)
    }
)

const http = {
    get: instance.get,
    patch: instance.patch,
    put: instance.put,
    delete: instance.delete,
    post: instance.post
}

export default http;