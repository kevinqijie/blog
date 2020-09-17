<template>
    <div class="articleBox">
        <h3>{{article.title}} <span style="float: right;color: #757575;font-size: 14px"><i class="el-icon-view"></i>阅读量:  <a href="javascript:void(0);" style="color: #757575;font-size: 14px">{{article.read_volume}}</a></span></h3>
        <div ref="content">

        </div>
        <div class="articleFooter">
            <div class="prev">
                上一篇: <router-link v-if="prev" :to="`/article/${prev.id}`">{{prev.title}}</router-link>
                <a href="javascript:void(0);" v-else>没有了</a>
            </div>
            <div class="next">
                下一篇:<router-link v-if="next" :to="`/article/${next.id}`">{{next.title}}</router-link>
                <a href="javascript:void(0);" v-else>没有了</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {getArticle} from "../../api/article";

    export default {
        name: "index",
        data(){
          return{
              article:{},
              prev:{},
              next:{}
          }
        },
        methods:{
            getArticle(){
                let query = this.$route.params.pathMatch
                getArticle(query).then(res=>{
                    this.article = res.data.article
                    this.$refs['content'].innerHTML = this.article.content
                    this.prev = res.data.pre
                    this.next = res.data.next
                })
            }
        },
        created() {
            this.getArticle()
        },
        watch:{
            "$route"() {
                this.getArticle()
            }
        }
    }
</script>

<style scoped>
    h3{
        color: #21759b;
        font-size: 18px;
        margin: 10px 0;
    }
    .articleBox p{
        font-size: 14px;
        color: #444;
        text-align: initial;
        margin: 10px 0;
    }
    .articleFooter{
        margin-top: 30px;
    }
    .articleFooter div{
        margin-bottom: 10px;
        font-size: 14px;
    }
    .articleFooter div a{
        color: #757575;
    }
</style>
