<script>
</script>

<template>
    <div class="bgArea">
        <div class="signUpArea">
            <h1>Expense Tracker</h1>
    <form action="#" id="form">
    <div class="infoInput page">
    <label for="">Account</label>
    <input type="email" placeholder="Placeholder/Account" id="Account">
    </div>

    <div class="infoInput page">
    <label for="">Password</label>
    <input type="text" placeholder="Placeholder/Password" id="Password">
    </div>
</form>

    <div class="bttnArea page"> 
        <RouterLink to="/ETSignUp" class="signup Btn">Sign Up</RouterLink>
        <button type="button" class="login Btn"><label for="" id="bttn">Log in</label></button>
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
