<script>
import child from "../components/PropsAndEmitPage/child.vue";
import child2 from "../components/PropsAndEmitPage/child2.vue";
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
        child2
    }
}
</script>

<template>
    <h1>Props：</h1>
    <p>。父傳子，為單一數據流，禁止使用v-model綁變數</p>
    <p>。宣告props:["變數"]，顯示值"{ { this.變數} }"</p>

    <div v-if="page == 1" class="show">
        <!--填寫註冊帳戶資訊的版面-->
        <!--註冊帳戶的版面-->
        <child />
        <!--<label for="">姓名</label>
        <input type="text" v-model="signInfo.name">
        <label for="">電話</label>
        <input type="text" v-model="signInfo.phone">
        <label for="">email</label>
        <input type="text" v-model="signInfo.email">
        <label for="">地址</label>
        <input type="text" v-model="signInfo.address">
        <label for="">畢業學校</label>
        <input type="text" v-model="signInfo.school">

        <label for="">性別</label>
        <div class="genderArea">
            <label for="">男</label>
            <input type="radio" v-model="signInfo.gender">
            <label for="">女</label>
            <input type="radio" v-model="signInfo.gender">
        </div>

        <label for="">興趣</label>
        <input type="text" v-model="signInfo.favorite">-->

        <button type="button" @click="changePage()">Next</button>

    </div>

    <div v-if="page == 2" class="show2">
    <!--在 child 中設計確認帳戶資訊的版面-->
    <!--    {{ this.personal }}-->
    {{ this.signInfo }}
    <child :person="personal" :sign="signInfo" />
    </div>
</template>

<style lang="scss" scoped>
.show{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>
