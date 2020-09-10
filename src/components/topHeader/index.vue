<template>
    <div class="topHeader">
        <h1><img src="../../assets/logo.png" alt="">个人博客</h1>
        <p>个人博客是一个关注互联网技术的个人博客，提供一个互联网从业者的学习成果和工作经验总结。</p>
        <nav>
            <router-link :to="item.path" v-for="(item,index) in navitemList" :key="index">{{item.name}}</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                navitemList:[
                    {
                        name:'首页',
                        path:'/'
                    },
                    {
                        name:'服务器',
                        path:'/list/1'
                    },
                    {
                        name:'linux',
                        path:'/list/2'
                    },
                    {
                        name:'Node.js',
                        path:'/list/3'
                    },
                    {
                        name:'数据库',
                        path:'/list/4'
                    },
                    {
                        name:'h5&css3',
                        path:'/list/5'
                    },
                    {
                        name:'python',
                        path:'/list/6'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  .topHeader{
      margin-top:10px ;
  }
  h1{
      display: flex;
      align-items: center;
  }
  h1 img{
      height: 35px;
  }
  nav{
      margin: 10px 0;
      padding: 10px 0;
      border-top: 1px #666666 solid;
      border-bottom: 1px #666666 solid;
  }
    nav a{
        display: inline-block;
        width: 100px;
        text-align: center;
    }
p{
    font-size: 12px;
    margin: 10px 0 10px 10px;
}
</style>
