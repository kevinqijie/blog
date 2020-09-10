<template>
 <div class="listbox">
     <ul>
         <li>
             <h3>centos 下 redis 安装,配置与开机启动</h3>
             <p class="desc">
                 Redis是一款开源免费，遵守BSD协议的，高性能的key-value数据库系统。它通过提供多种键值数据类型来满足不同场景下的存储需求， 并借助许多高层级的接口使其可以胜任如缓存，队列系统等不同的角色。
             </p>
             <div class="listfooter">
                 发布于 <a href="javascript:void(0);">2020-07-15</a> 属于 <a href="javascript:void(0);">服务器</a>  分类
             </div>
         </li>
     </ul>
 </div>
</template>

<script>
    export default {
        name: "index",
        watch:{
          "$route"() {
             this.getlist()
          }
        },
        methods:{
          getlist(){
              let query = this.$route.params.pathMatch
              console.log(query)
          }
        },
        created() {
            this.getlist()
        },
        updated() {

        }
    }
</script>

<style scoped>
   .listbox{

   }
   .listbox h3{
       color: #21759b;
       font-size: 18px;
       margin: 10px 0;
   }
   .listbox ul li{
       border-bottom:1px solid #999 ;
       padding: 10px ;
       box-sizing: border-box;
   }
   .listbox ul li p{
       font-size: 14px;
       line-height: 1.7;
       color: #444;
   }
    .listfooter{
      font-size: 14px;
        margin: 10px 0;
        color: #757575;
    }
   .listfooter a{
       text-decoration: underline;
       color: #757575;
   }
</style>
