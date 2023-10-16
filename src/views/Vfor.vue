<script>
export default {
    data(){
        return{
            arr:[1,2,3,4,5],
            arr2:[
                {
                    name:"Jojo",
                    age:18,
                    address:"XXX路"
                },
                {
                    name:"Mary",
                    age:20,
                    address:"XXX路"
                },
                {
                    name:"33",
                    age:"22",
                    address:"XXX路"
                }
            ]
        }
    }
}
</script>

<template>
    <h1>v-for</h1>
<!-- arr -->
<p v-for = " item in arr">{{ item }}</p>

<!-- arr2 -->
    <ol v-for = "x in arr2"></ol>
    <li>{{ x.name }}</li>
    <li>{{ x.age }}</li>
    <li>{{ X.address }}</li>
</template>

<style lang="scss" scoped>
</style>