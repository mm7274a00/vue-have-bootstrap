<script>
export default {
        data(){
            return{
                title:"cool",
                isRed:false,
                isLarge:false,
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
</style>
