const { default: http } = require("./httpService");

export async function signupApi(data) {
    return http.post('/user/signup', data).then(({ data }) => data.data)
}