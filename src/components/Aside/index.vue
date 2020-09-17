<template>
    <div class="aside">
        <div class="searchBox">
            <input type="text" placeholder="搜索">
            <button>搜索</button>
        </div>
        <h3>热门文章</h3>
        <div class="listBox">
            <ul>
                <li v-for="(item,index) in hostArticleList" :key="index">
                    <a href="javascript:void(0);">
                        [{{index}}] {{item.title}}
                    </a>
                </li>
            </ul>
        </div>
        <h3>最近更新</h3>
        <div class="listBox">
            <ul>
                <li v-for="(item,index) in latelyUpdateList" :key="index">
                    <a href="javascript:void(0);">
                        [{{index}}] {{item.title}}
                    </a>
                </li>
            </ul>
        </div>
        <h3>分类目录</h3>
        <div class="listBox">
            <ul>
                <li v-for="(item,index) in navitemList" :key="index">
                    <router-link :to="item.path" >{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getHot} from "../../api/article";

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
                        path:'/list'
                    },
                    {
                        name:'linux',
                        path:'/list'
                    },
                    {
                        name:'Node.js',
                        path:'/list'
                    },
                    {
                        name:'数据库',
                        path:'/list'
                    },
                    {
                        name:'h5&css3',
                        path:'/list'
                    },
                    {
                        name:'python',
                        path:'/list'
                    },
                ],
                hostArticleList:[
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    },
                    {
                        title:'npm 常用命令',
                        id:0
                    }
                ],
                latelyUpdateList:[
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    },
                    {
                        title:'centos 下 redis 安装,配置与开机启动',
                        id:0
                    }
                ]
            }
        },
        methods:{
            getHot(){
                getHot().then(res=>{
                    console.log(res)
                })
            }
        },
        created() {
            this.getHot()
        }
    }
</script>

<style scoped>
    .searchBox{
        display: flex;
        margin: 20px 0;
    }
   .searchBox input{
       padding: 5px ;
       box-sizing: border-box;
       outline: none;
       border: 1px solid #eee;
       border-radius: 2px;
       height: 30px;
   }
   .searchBox button{
       background: #5fbeaa;
       /*border: 1px solid #5fbeaa;*/
       border: none;
       color: #fff;
       padding: 0 8px;
       height: 30px;
       margin-left: 5px;
       outline: none;
       cursor: pointer;
       box-sizing: border-box;
   }

    .listBox{
        margin: 10px 0 20px 0;
    }
    .listBox ul li{
        margin: 5px 0;

    }
    .listBox ul li a{
        text-decoration: underline ;
        font-size: 14px;
    }

</style>
