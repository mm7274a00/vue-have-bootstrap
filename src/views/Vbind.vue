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
<h1>V bind</h1>
<p> 。 v- model : 綁定標籤的值</p>
<p> 。 v-bind : 綁定標籤屬性</p>

<div class="bgArea">
    <div class="left Box">
    <h1 class="cool">COOL1</h1>
    <h2 v-bind:class="title">COOL2</h2>
    <!--<h2 :class="title">COOL2</h2>-->

    <h2> class{}</h2>
<br>
    <h2 :class="{
        red: isRed,
        large: isLarge,
        }">在這裡</h2>
    <label for="">isRed</label>
    <input type="checkbox" value="true" v-model="isRed">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">
    <br><br>
    <p>。 未勾選時，h2無class名稱</p>
    <p>。 當isRed/isLarge，賦予class名稱</p>
<br>

    <h3>class []</h3>
    <h2 :class="styleArr">在那裡</h2>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr" disabled>
    <label for="">bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">
    <p>。styleArr是變數，記得在data(){}中宣告並使他成為 空陣列</p>
</div>
    <div class="right Box">
        <img :src="imgText" alt="" style="width: 18rem;">
        <p>。也可使用於圖片</p>
    </div>
</div>




</template>

<style lang="scss" scoped>
.bgArea{
    display: flex;
    margin-top: 50px;
    .Box{
        margin-right: 200px;
    }
}
.cool{
    color: rgb(183, 172, 255);
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
