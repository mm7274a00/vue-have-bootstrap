<script>
    export default {
        data(){
            return{
                titer : "cool",
                car: false,
                car2: false,
                house:"",
                house2:"",
            }
        }
    }
</script>

<template>
<h1>V-if & V-show</h1>
<p>兩者於頁面顯示相同，須於F12查看才會不同</p>
<br>

<!--v-if-->
<h3>v-if</h3>
<p>v-if 是條件成立時，再"建立"並渲染標籤</p>
<label for="">小名有車</label>
<input type="checkbox" value="true" v-model="car">
<p v-if = "car">確實有車</p>
<br>
<!--v-show-->
<h3>v-show</h3>
<p>v-show 是條件成立時，再""並渲染標籤</p>
<label for="">小名有車</label>
<input type="checkbox" value="true" v-model="car2">
<p v-if = "car2">確實有車</p>

<br><p>   </p>

<!--v-if & v-else-->
<h3>v-if & v-else</h3>
<label for="">小名有房</label>
<select name="" id="" v-model="house">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<p v-if = "house ==1">普通的房子</p>
<p v-if = "house ==2">很大的房子</p>
<p v-else>還好的房子</p>

<!--v-if & v-else & v-else-->
<h3>v-if & v-else-if & v-else</h3>
<label for="">大名有房</label>
<select name="" id="" v-model="house2">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>
<p v-if = "house2 ==1">普通的房子</p>
<p v-else-if = "house2 ==2">很大的房子</p>
<p v-else>還好的房子</p>

<p>兩者差別為：使用v-if選擇值1時，"v-else"的文字還是會出現
</p>
</template>

<style lang="scss" scoped>


</style>
