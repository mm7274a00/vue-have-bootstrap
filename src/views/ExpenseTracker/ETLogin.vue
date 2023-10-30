<script>
//做至console輸入的帳號密碼、頁面轉跳至記帳程式
//預計結合註冊頁面添加的網頁暫存資料進行初步登入核對
export default {
    data(){
        return{
            logInfo:{
                LogAc:"",
                LogPas:"",
            },
            dataAC:null,
        }
    },
    methods:{
        login(){
            this.dataAc = JSON.parse(localStorage.getItem(this.logInfo.LogAc))
            if( this.logInfo.LogAc === this.dataAc){
            console.log(this.logInfo);
            //跳出提示並轉跳頁面至記帳程式
            alert("登入成功")
            this.$router.push({path:'/ExpenseTracker'})
            }
            else{
                alert("登入失敗")
            }
        },
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="signUpArea">
            <h1>Expense Tracker</h1>
    <form action="#" id="form">
    <div class="infoInput page">
    <label for="">Account</label>
    <input type="email" placeholder="Placeholder/Account" id="LogAc" v-model="logInfo.LogAc">
    </div>

    <div class="infoInput page">
    <label for="">Password</label>
    <input type="text" placeholder="Placeholder/Password" id="LogPas" v-model="logInfo.LogPas">
    </div>
</form>

    <div class="bttnArea page"> 
        <RouterLink to="/ETSignUp" class="signup Btn">Sign Up</RouterLink>
        <button type="button" class="login Btn" @click="login"><label for="" id="bttn">Log in</label></button>
    </div>
</div>
    </div>
</template>

<style lang="scss" scoped>
$maincolor:#BEC0CD(147, 184, 203);
.bgArea{
    width: 1440px;
    height: 1024px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
.signUpArea{
    width: 446px;
    height: 320px;
    h1{
        text-align: center;
        color: #3C7FA5;
        margin-bottom: 72px;
        font-weight: bold;
    }
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
        margin-bottom: 26px;
        height: 50px;
        padding-left: 10px;
        border-radius: 10px;
        border: 2px solid rgb(139, 139, 139);
        font-size: 12pt;
    }
    .bttnArea{
        margin-top: 73px;
        height: 39px;
        .Btn{
            padding: 8px;
            width: 153px;
            border: 0;
            border-radius: 10px;
            color: rgb(255, 255, 255);
            background-color: #3C7FA5;
            margin-left: 28px;
            text-align: center;
            text-decoration:none ;
            &:active{
                background-color: #A1B9C7;
                transition: 0.2s;
        }
            }
    }

}
}

</style>
