import request from '../router/axios'
export const getList = (category,page)=>{
         return request({
             url:`/api/article/page/${category}/${page}`,
             method: 'get',
         })
}

export const getArticle=(id)=>{
    return request({
        url:`/api/article/details/${id}`,
        method: 'get',
    })
}

export const getHot=()=>{
    return request({
        url:`/api/article/hot`,
        method: 'get',
    })
}
