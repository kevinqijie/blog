<template>
    <div class="blogBox">
        <diV class="container">
            <topHeader/>
            <div class="box">
                <div class="Main">
                    <router-view/>
                </div>
                <div class="Aside">
                    <Aside/>
                </div>
            </div>
        </diV>
    </div>
</template>

<script>
    import topHeader from '../../components/topHeader'
    import Aside from '../../components/Aside'
    // import Main from '../../components/Main'
    export default {
        name: "index",
        components:{
            topHeader,
            Aside,
            // Main
        }
    }
</script>

<style scoped>
.container{
    max-width: 1300px;
    margin: 0 auto;
    background: rgba(200,200,200,0.9);
    color: #000;
    padding: 10px;
    box-sizing: border-box;
}
    .blogBox{
        background: url("../../assets/bg.jpg");
        height: 100vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: hidden;
        overflow-y: auto;
    }
    .box{
        display: flex;
    }
    .box .Main{
        flex: 1;
        margin: 20px 0;
        padding: 0 20px ;
        box-sizing: border-box;
    }
.box .Aside{
    width: 300px;
}
</style>
