import {LoginByUsername} from "../../api/user";

const user = {
    state: {
      userInfo:{},
      token:localStorage.getItem('token')
    },
    actions: {
        LoginByUsername({ commit },loginForm){
            return new Promise((resolve, reject) => {
                LoginByUsername(loginForm).then(res=>{
                    commit('SET_TOKEN',res.data.token)
                    resolve()
                }).catch((err)=>{
                    reject(err)
                })
            })
        }
    },
    mutations:{
        SET_USERINFO:(state,userInfo)=>{
            state.userInfo = userInfo
        },
        SET_TOKEN:(state,token)=>{
            state.token = token
            localStorage.setItem('token',token)
        }
    }
}

export default  user
