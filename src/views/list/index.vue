<template>
    <div class="listbox">
        <ul>
            <li v-for="(item,index) in dataList" :key="index">
                <h3> <router-link :to="`/article/${item.article_id}`">{{item.title}}</router-link> </h3>
                <p class="desc">
                    {{item.description}}
                </p>
                <div class="listfooter">
                    发布于 <a href="javascript:void(0);">{{interceptDate(item.create_time)}}</a> 属于 <a href="javascript:void(0);">{{navitemList[item.category].name}}</a>
                    分类
                    <span style="float: right">发布人:<a href="javascript:void(0);">{{item.create_user}}</a> <i class="el-icon-view"></i>阅读量:  <a href="javascript:void(0);">{{item.read_volume}}</a></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getList} from "../../api/article";

    export default {
        name: "index",
        data() {
            return {
                dataList: [],
                total: 0,
                navitemList: [
                    {
                        name: '首页',
                        path: '/'
                    },
                    {
                        name: '服务器',
                        path: '/list/1'
                    },
                    {
                        name: 'linux',
                        path: '/list/2'
                    },
                    {
                        name: 'Node.js',
                        path: '/list/3'
                    },
                    {
                        name: '数据库',
                        path: '/list/4'
                    },
                    {
                        name: 'h5&css3',
                        path: '/list/5'
                    },
                    {
                        name: 'python',
                        path: '/list/6'
                    },
                ]
            }
        },
        watch: {
            "$route"() {
                this.getlist()
            }
        },
        methods: {
            getlist() {
                let query = this.$route.params.pathMatch
                if (query == "") {
                    query = 0
                }
                getList(query, 1).then(res => {
                    this.dataList = res.data.data
                    this.total = res.data.total
                })
            },
            interceptDate(date) {
                return date.substring(0,10)
            }
        },
        created() {
            this.getlist()
            this.$store.dispatch('LoginByUsername', {name: '1111'})
        },
        updated() {

        }
    }
</script>

<style scoped>
    .listbox {

    }

    .listbox h3 a{
        color: #21759b;
        font-size: 18px;
        margin: 10px 0;
    }

    .listbox ul li {
        border-bottom: 1px solid #999;
        padding: 10px;
        box-sizing: border-box;
    }

    .listbox ul li p {
        font-size: 14px;
        line-height: 1.7;
        color: #444;
    }

    .listfooter {
        font-size: 14px;
        margin: 10px 0;
        color: #757575;
    }

    .listfooter a {
        text-decoration: underline;
        color: #757575;
    }
</style>
