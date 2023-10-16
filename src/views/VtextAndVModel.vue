<script>
import test from "../components/test.vue"
export default {
    data(){
        return{
            //V-text
            title:"Title",
            address:"xxx路三號",
            info:{
                name:"John",
                age: 18,
                address:"xxx路三號",
            },
            //V-Model雙向綁定
            cool:"",
            age:18,
            selectText:"",
            lazyText:"",
            numberText:"",
            trimText:"",
            checkText:[],
            radioText:[],
        }
    },
    components: {
        test
    },
    methods:{
        test(){
            console.log("xxx")
        }
    }
}
</script>

<template>
    <h1>V-text & V-model</h1>
    <P>{{ this.title }}</P>
    <P v-text="address"></P>
    <test v-text="address"/>
    
    <h1>V-Model</h1>
    <input type="text" v-modle="cool">
    <h4>{{ this.cool }}</h4>
    <input type="number" v-model="age">
    <h4 v-text="'age:'+age"></h4>

    <select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
    <p>{{ this.selectText }}</p>

    <!-- lazy,number,trim -->
    <p>V-model.lazy</p>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>

    <p>V-model.number</p>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>

    <p>V-model.trim</p>
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <p>checkbox</p>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    <p>{{ this.checkText }}</p>

    <p>radio</p>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="pork">
    <label for="">午餐</label>
    <input type="radio" v-model="radioText" name="food" value="chicken">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="fish">
    <p>{{ this.radioText }}</p>
</template>

<style lang="scss" scoped>
</style>