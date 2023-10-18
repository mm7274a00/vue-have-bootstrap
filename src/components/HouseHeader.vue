<script>
import {RouterLink} from 'vue-router'
export default{
    data(){
        return{

        }
    },
    components :{
        RouterLink,
    }
}
</script>

<template>
    <div class="header page">
        <div class="color box"></div>

        <div class="com box">
            <input type="button" value="会社案内" class="button">
            <label for="">｜</label>
            <input type="button" value="店舖、アクセス">
        
        </div>

        <div class="phone box">
            <i class="fa-solid fa-phone"></i>
            <span><p>010-123456789</p></span>
        </div>

        <div class="login box">
            <!--<input type="button" value="ログイン">-->
            <RouterLink to="/Login" class="log Btn">ログイン</RouterLink>
            <label for="">｜</label>
            <input type="button" value="お問い合わせ" class="quz Btn">
    </div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:#475467;
.header{
    background-color: white;
    height: 168px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
.box{
    
    /*border: 2px solid blue;*/
    margin: 0 auto;
}
    .color{
        width: 98px;
        height: 98px;
        background-color: $maincolor;
    }
    .com{
        width: 300px;
        height: 24px;
        display: flex;
        justify-content: space-between;
        input{
            border: 0;
            background-color: white;
            width: 40%;
            height: 100%;
        }
    }
    .phone{
        color: black;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
        font-size: 16pt;
        width: 204px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;


    }
    .login{
        border-radius: 10px;
        width: 248px;
        height: 48px;
        display: flex;
        align-items: center;
        background-color: $maincolor;
        color: white;
        .Btn{
            width: 120%;
            margin: 0 10px;
            color: white;
            background-color: $maincolor;
            font-weight: bold;
            text-align: center;
            text-decoration:none ;
            border: 0;
    }
}
}

</style>
