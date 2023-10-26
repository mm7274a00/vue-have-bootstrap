<script>
export default {
    data(){
        return {
            arr:[1, 2, 3, 4, 5,],
            arr2: [
                {
                    name: "JoJo",
                    age: 18,
                    address: "XXX路"
                },
                {
                    name: "Alex",
                    age: 20,
                    address: "XXX路"
                },
                {
                    name: "Mary",
                    age: 26,
                    address: "XXX路"
                }
            ]
        }
    }
}
</script>

<template>
    <h1>v-for</h1>
    <p>。概念與 forEach 遍歷相同</p>
    <p>。此次要求將遍歷的元素全都顯示出，雖然code僅有打一行，實際會根據arr[] 調整行數</p>
    <p>。可使用於需要產生多個相同格式、物件的場合（九宮格、商品卡片）</p>
<br>

<div class="arr1">
    <h4>範例1：</h4>
    <!-- arr -->
    <p v-for = " item in arr">{{ item }}</p>

</div>
<br>

<div class="arr2">
    <h4>範例2：</h4>
    <p>。自動列印出陣列裡的所有資料</p>
    <!-- arr2 -->
    <ol v-for = "x in arr2">
        <li>{{ x.name }}</li>
        <li>{{ x.age }}</li>
        <li>{{ x.address }}</li>
    </ol>
</div>

</template>

<style lang="scss" scoped>
</style>