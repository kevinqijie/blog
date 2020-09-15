const  article = {
  state:{
      article:{}
  },
    mutations:{
      SET_ARTICLE:(state,article)=>{
          state.article =article
      }
    },
    actions:{
      test({commit},art){
          commit('SET_ARTICLE',art)
      }
    }
}

export default article
