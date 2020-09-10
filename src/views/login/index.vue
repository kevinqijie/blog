<template>
    <div class="box">
         <div class="loginbox">
<!--             <img class="logo" src="../../assets/logo.png" alt="" >-->
             <h1>后台登录</h1>
             <div class="iptBox">
                 <div class="row" >
                     <input type="text" placeholder="请输入用户名">
                 </div>
                 <div class="row" >
                     <input type="password" placeholder="密码">
                 </div>
                 <div class="row btnBox" >
                     <div class="btn">
                         登录
                     </div>
                 </div>
             </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    h1{
        text-align: center;
    }
    .logo{
        display: block;
        width: 70px;
        margin: 0 auto;
    }
   .box{
       background: url("../../assets/bg.jpg");
       height: 100vh;
       width: 100%;
       box-sizing: border-box;
       background-size: 100% 100%;
       overflow: hidden;
   }
   .iptBox{
       /*margin-top: 80px;*/
   }
    .loginbox{
        max-width: 500px;
        margin: 250px auto;
        /*height: 600px;*/
        background: #fff;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
    }
    .row{
        margin: 20px auto;
        width: 300px;
        display: flex;
        position: relative;
        overflow: hidden;
        height: 41px;
    }
    .row input{
        outline: none;
        padding: 10px;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #adadad;
        flex: 1;
    }
    .btnBox{
        border-radius: 5px;
    }
    .btn{
        width: 900px;
        padding: 10px;
        text-align: center;color: #fff;
        background:linear-gradient(90deg, /* 90度方向上绘制渐变色  */
            /* 0-10%:红色; 10-20%:透明色 ; 20-30%:红色 ;30-50%:由红色逐渐变成透明色透明色;
                50-70%:红色 ; 70-80%:由透明色逐渐变成红色; 80-100%:红色;*/
        #00dbde ,#fc00ff,#336699,#663399,transparent 100%);
       position: absolute;
       left: 50%;
        transform: translateX(-50%);
        -webkit-transition: all .4s;
        -o-transition: all .4s;
        -moz-transition: all .4s;
        transition: all .4s;
        border-radius: 8px;
        cursor: pointer;
    }
    .btn:hover{
        background:linear-gradient(90deg, /* 90度方向上绘制渐变色  */
            /* 0-10%:红色; 10-20%:透明色 ; 20-30%:红色 ;30-50%:由红色逐渐变成透明色透明色;
                50-70%:红色 ; 70-80%:由透明色逐渐变成红色; 80-100%:红色;*/
        #fc00ff,#336699,#663399, #00dbde ,transparent 100%);
    }
    .row a{
        text-align: right;
        display: inline-block;
        width: 100%;

    }
    .row a:hover{
        text-decoration: underline;
    }
</style>
