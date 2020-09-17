<template>
    <div class="release">
        <div>
            <label>标题:</label>
            <input type="text" placeholder="标题" v-model="title">
        </div>
        <div>
            <label>分类:</label>
            <select v-model="category">
                <option :value ="item.id" v-for="(item,index) in navitemList" :key="index">{{item.name}}</option>
            </select>
        </div>
        <div id="editorElem" style="text-align:left;background: #fff"></div>
        <button v-on:click="getContent" style="margin-top: 10px">发表</button>
    </div>
</template>

<script>
    import E from 'wangeditor';
    import {addArticle} from "../../api/article";
    export default {
        name: "index",
        data () {
            return {
                editorContent: '',
                navitemList:[
                    {
                        name:'服务器',
                        id:'1'
                    },
                    {
                        name:'linux',
                        id:'2'
                    },
                    {
                        name:'Node.js',
                        id:'3'
                    },
                    {
                        name:'数据库',
                        id:'4'
                    },
                    {
                        name:'h5&css3',
                        id:'5'
                    },
                    {
                        name:'python',
                        id:'6'
                    },
                ],
                category:1,
                title:''
            }
        },
        methods: {
            getContent: function () {
               let description =  this.editorContent.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "").substring(0,100)
                addArticle({
                    title:this.title,
                    content:this.editorContent,
                    category:this.category,
                    description:description
                }).then(res=>{
                    console.log(res)
                })
            }
        },
        mounted() {
            var editor = new E('#editorElem');
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            };
            editor.create()
        }
    }
</script>

<style scoped>
.release input{
    padding:5px;
    box-sizing: border-box;
    outline: none;
    border: 1px #999 solid;
    margin: 10px 0;
    width: 250px;
}
select{
    width: 250px;
    margin: 10px 0;
    border: 1px #999 solid;
    padding: 5px;
    outline: none;
}
</style>
