<script>
import child from "../components/PropsAndEmitPage/child.vue";
import child1 from "../components/PropsAndEmitPage/child1.vue";
export default {
    data(){
        return{
            //prop為單一數據流，禁止使用v-model綁變數
            personal:{
                name:"mary",
                age:58,
                email:"XXXX@gmail.com"
            },
            page: 1,
            //變數
            signInfo:{
                name:"",
                phone:"",
                email:"",
                address:"",
                school:"",
                gender:"",
                favorite:"",
            }
        }
    },
    methods:{
        changePage(){
        console.log(this.signInfo);
        this.page = 2;
        }
    },
    components: {
        child,
        child1

    }
}
</script>

<template>
    <h1>Props：</h1>
    <p>。父傳子，為單一數據流</p>
    <p>。不應使用 input 綁 v-model，此為 Vue 的 Bug，容易竄改資料</p>
    <p>。宣告props:["變數"]，顯示值"{ { this.變數} }"</p>

<div class="under">
    <div v-if="page == 1" class="show 1">
        <!--填寫註冊帳戶資訊的版面-->
        <!--註冊帳戶的版面-->
        <!-- <child /> -->
        <h4>Props表單頁面</h4>
        <label for="">姓名</label>
        <input type="text" v-model="signInfo.name">
        <label for="">電話</label>
        <input type="text" v-model="signInfo.phone">
        <label for="">email</label>
        <input type="email" v-model="signInfo.email">
        <label for="">地址</label>
        <input type="text" v-model="signInfo.address">
        <label for="">畢業學校</label>
        <input type="text" v-model="signInfo.school">

        <label for="">性別</label>
        <div class="genderArea">
            <label for="">男</label>
            <input type="radio" value="男" v-model="signInfo.gender">
            <label for="">女</label>
            <input type="radio" value="女" v-model="signInfo.gender">
        </div>

        <label for="">興趣</label>
        <input type="text" v-model="signInfo.favorite">
        <br>
        <button type="button" @click="changePage()">Next</button>

    </div>

    <div v-if="page == 2" class="show 2">
    <!--在 child 中設計確認帳戶資訊的版面-->
    <!--    {{ this.personal }}-->
    <!-- {{ this.signInfo }} -->
    <child :person="personal" :sign="signInfo" />
    </div>

    <div class="text">
        <h4>如左側範例：</h4> 
        <p>。 建立好父子層關係，宣告方法及變數</p>
        <p>。 於Props表單頁面（父層）填寫資料，點擊Next即執行方法</p>
        <p>。 子層接收到 props:[] 內的變數資料，即可進行顯示</p>

    </div>
</div>

</template>

<style lang="scss" scoped>
.under{
    display: flex;
    .text{
        margin-top: 65px;
        margin-left: 100px;
    }

    .show{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    border: 2px solid black;
    }
}


</style>
