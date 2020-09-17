import axios from 'axios'
import router from '../router'
import store from '../store'
import {Message} from 'element-ui'
axios.interceptors.request.use(
    config => {
        let t = localStorage.getItem('token')
        if (t) {
            config.headers.Authorization = t
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 拦截响应
axios.interceptors.response.use(
    response => {
       let {status} =response
        console.log(status)
        return response
    },
    err => {
        Message({
            message: err.response.data.message,
            type: 'error',
            duration: 5 * 1000
        })
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    localStorage.removeItem('token')
                    store.dispatch('login_out')
                    router.push({ path: '/login' })
            }
        }
        return Promise.reject(err)
    }
)

export default axios
