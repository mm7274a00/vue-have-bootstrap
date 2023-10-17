<script>
export default {
        data(){
            return{
                title:"cool",
                isRed:false,
                isLarge:false,
                styleArr:[],
                imgText:"https://www.dogtime.com.tw/wp-content/uploads/2022/06/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220608113358.jpg",
            }
        }
}
</script>

<template>

<p>【Vbind】</p>
<p> v- model : 綁定標籤的值</p>
<p> v-bind : 綁定標籤屬性</p>

    <h1 class="cool">COOL1</h1>
    <h2 v-bind:class="title">COOL2</h2>
    <!--<h2 :class="title">COOL2</h2>-->

    <h2> class{}</h2>
    <label for="">isRed</label>
    <input type="checkbox" value="true" v-model="isRed">

    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">
    <!--未啟動時，h2無class名稱-->

    <h2 :class="{
        red: isRed,
        large: isLarge,
        }">在這裡</h2>
    <!--當isRed/isLarge，賦予class名稱-->

    <!-- styleArr是變數，記得在data(){}中宣告並使他成為 空陣列 -->
    <h3>class []</h3>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" disabled>
    <label for="">bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">

    <h2 :class="styleArr">在那裡</h2>

    <img :src="imgText" alt="" style="width: 18rem;">


</template>

<style lang="scss" scoped>
.cool{
    color: rgb(183, 172, 255);
}
p{
    font-size: 14pt;
}
.red{
    color: rgb(255, 76, 76);
}
.large{
    font-size: 30pt;
}
.bold{
    font-weight: 100;
}

</style>
