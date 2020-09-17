import request from '../router/axios'
export  const  LoginByUsername = (data)=>{
    return request({
        url:'/api/jwt/login',
        method: 'post',
        data
    })
}
