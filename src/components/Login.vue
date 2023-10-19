<!--https://www.figma.com/file/TQYQgDnAAKgKl8lbB8FdPE/%E5%89%8D%E7%AB%AF%E7%B7%B4%E7%BF%925---%E6%88%BF%E5%9C%B0%E7%94%A2%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1?type=design&node-id=106-16186&mode=design&t=lirE3s3OR7gJefDy-0-->

<script>
export default {
    data(){
        return{
        }
    },
}
</script>

<template>
    <div class="bgArea">
    <div class="signUpArea">
    <form action="#" id="form">
    <div class="infoInput page">
    <label for="">Email</label>
    <input type="email" placeholder="******@gmail.com" id="email">
    <i class="fa-regular fa-envelope"></i>
    </div>

    <div class="infoInput page">
    <label for="">Name/Password</label>
    <input type="text" placeholder="NameAndPassword" id="NameAndPassword">
    <i class="fa-solid fa-user"></i>
    </div>
</form>

    <div class="bttnArea page">
        <div class="keepArea">
            <input type="checkbox" class="checkArea"><label for="">ログインを保持する</label>
            <button type="submit" class="signupp Btn"><label for="" id="bttn">新規登錄</label></button>
        </div>

        <button type="button" class="login Btn"><label for="" id="bttn">ログイン</label></button>
    </div>
</div>
</div>
</template>

<style lang="scss" scoped>

$maincolor:#BEC0CD(147, 184, 203);
.bgArea{
    width: 1440px;
    height: 854px;
    background-color: #BEC0CD;
    display: flex;
    justify-content: center;
    align-items: center;

.signUpArea{
    width: 320px;
    height: 320px;

    .page{
        /*
        border: 2px solid black;*/
        height: 20%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .infoInput{
        font-size: 12pt;
        flex-direction: column;
        color: rgb(54, 82, 128);
        position: relative;
    }

    input{
        border: 0;
        height: 36px;
        padding-left: 40px;
        border-radius: 10px;
        padding-right: 0;
        font-size: 12pt;
    }
    i{
        position: absolute;
        top: 32px;
        left: 10px;
        font-size: 15pt;
        color: $maincolor;
    
    }
    .bttnArea{
        height: 150px;
        flex-direction: column;
        .keepArea{
            margin-top: 14px;
            display: flex;
            justify-content: space-around;
            .checkArea{
                height: 24px;
            }
        }
        .Btn{
            border: 0;
            border-radius: 10px;
            }
    }
    .login{
            width: 234px;
            height: 52px;
            font-size: 16pt;
            margin: auto;

            background-color: #4D6674;
            color: rgb(255, 255, 255);
            &:active{
                background-color: rgb(255, 255, 255);
                color: #4D6674;
                transition: 0.2s;
        }
        }
}
}
</style>
