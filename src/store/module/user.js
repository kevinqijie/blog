const user = {
    state: {
      userInfo:{}
    },
    actions: {
        LoginByUsername({ commit }, userInfo){
            return new Promise((resolve, reject) => {
                console.log(userInfo)
                if(userInfo){
                    commit('SET_USERINFO',userInfo)
                    resolve()
                }else {
                    reject()
                }
            })
        }
    },
    mutations:{
        SET_USERINFO:(state,userInfo)=>{
            state.userInfo = userInfo
        }
    }
}

export default  user
