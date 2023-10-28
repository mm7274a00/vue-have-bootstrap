<script>
export default {
    data(){
        return{
            // signArr:[],
            SURe:"",
            signInfo:{
                SUAccount:"",
                SUPasword:"",
            },
            key:"signInfo.SUAccount.value",
        }
    },
    methods:{
        signup(){
            //檢查欄位是否填寫完畢
            if(this.signInfo.SUAccount == "" || this.signInfo.SUPasword == "" || this.SURe == ""){
                alert("請填寫空白欄位")
                return
            }
            //進行兩個密碼欄未驗證是否相符，如相符則傳送至網頁暫存資料
            if (this.signInfo.SUPasword == this.SURe){ 
                // this.signArr.push(this.signInfo)
                localStorage.setItem(this.signInfo.SUAccount, JSON.stringify(this.signInfo.SUPasword));
                console.log(this.signInfo);
                // alert("註冊成功")
                // this.$router.push({path:'/ETLogin'})
            }
            else{
                alert("兩欄密碼不相符")
            }

        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="signUpArea">
            <h1>Sign Up</h1>
    <form action="#" id="form">
    <div class="infoInput page">
    <label for="">Account</label>
    <input type="email" class="placeholder" placeholder="******@gmail.com" id="SUAccount" v-model="signInfo.SUAccount">
    </div>

    <div class="infoInput page">
    <label for="">Password</label>
    <input type="text" placeholder="Password" id="SUPasword" v-model="signInfo.SUPasword">
    </div>

    <div class="infoInput page">
    <label for="">Password</label>
    <input type="text" placeholder="RecheckPassword" id="SURe" v-model="SURe">
    </div>
</form>

    <div class="bttnArea page">
        <!--<button type="button" class="login Btn"><label for="" id="bttn">Cancel</label></button>-->
        <RouterLink to="/ETLogin" class="Cancel Btn">Cancel</RouterLink>
        <button type="button" class="login Btn" @click="signup"><label for="" id="bttn">Sign up</label></button>
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
            text-decoration:none ;
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
