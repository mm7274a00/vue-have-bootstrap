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
            <h1>Sign Up</h1>
    <form action="#" id="form">
    <div class="infoInput page">
    <label for="">Account</label>
    <input type="email" placeholder="******@gmail.com" id="email">
    </div>

    <div class="infoInput page">
    <label for="">Password</label>
    <input type="text" placeholder="Password" id="Password">
    </div>

    <div class="infoInput page">
    <label for="">RepeatPassword</label>
    <input type="text" placeholder="RepeatPassword" id="RepeatPassword">
    </div>
</form>

    <div class="bttnArea page">
        <!--<button type="button" class="login Btn"><label for="" id="bttn">Cancel</label></button>-->
        <RouterLink to="/ETLogin" class="Cancel Btn">Cancel</RouterLink>
        <button type="button" class="login Btn"><label for="" id="bttn">Sign up</label></button>
    </div>
</div>
</div>
</template>

<style lang="scss" scoped>
.bgArea{
    width: 1440px;
    height: 1024px;
    background-color: #3C7FA5;
    display: flex;
    flex-direction: column;
    align-items: center;
.signUpArea{
    margin-top: 268px;
    width: 446px;
    height: 488px;
    h1{
        margin-bottom: 72px; 
        text-align: center;
        color: white;
    }
    .page{
        /*
        border: 2px solid black;*/
        height: 20%;
        display: flex;
        align-content: center;
        justify-content: center;
        color: white;
    }
    .infoInput{
        height: 85px;
        font-size: 12pt;
        flex-direction: column;
        color: rgb(255, 255, 255);
        position: relative;
        input{
            margin-bottom: 17px;
            border: 2px solid white;
            height: 45px;
            padding-left: 10px;
            border-radius: 5px;
            font-size: 12pt;
            background-color: #3C7FA5;
    }
    }

    .bttnArea{ 
        .Btn{
            margin: auto;
            margin-top: 72px;
            width: 153px;
            height: 39px;
            border: 0;
            border-radius: 10px;
            font-size: 16pt;
            text-align: center;
            padding-top: 5px;
            background-color: #ffffff;
            color: #3C7FA5;
            &:active{
                color: #ffffff;
                background-color: #A1B9C7;
                transition: 0.1s;
            }
            }
    }
}
}

</style>
