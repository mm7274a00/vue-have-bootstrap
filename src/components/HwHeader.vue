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
        <RouterLink to="/HW/HwHome" class="homepage box"></RouterLink>

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
            <RouterLink to="/HW/Login" class="log Btn">ログイン</RouterLink>
            <label for="">｜</label>
            <RouterLink to="/HW/HwQuz" class="quz Btn">お問い合わせ</RouterLink>
            <!--<input type="button" value="お問い合わせ" class="quz Btn">-->
    </div>
    </div>
</template>

<style lang="scss" scoped>

$maincolor:#475467;
.header{
    background-color: white;
    width: 1440px;
    height: 168px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border: 2px solid #475467;

    
.box{
    
    /*border: 2px solid blue;*/
    margin: 0 auto;
}
    .homepage{
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
        p{  
            margin: auto;
            margin-left: -20px;
        }


    }
    .login{
        border-radius: 10px;
        width: 248px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $maincolor;
        color: white;
        .Btn{
            margin: 0 10px;
            color: white;
            background-color: $maincolor;
            font-weight: bold;
            text-align: center;
            text-decoration:none ;
    }
}
}

</style>
