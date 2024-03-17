import axios from "axios";

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $djangoHost = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost,
    $djangoHost
}
