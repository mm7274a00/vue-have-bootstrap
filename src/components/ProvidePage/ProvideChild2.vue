<script>
export default{
    data(){
        return{

        }
    },
    inject:[
    "msg",
    "cool",
    "arr",
    "setupMSG"
    ]
}
</script>

<template>
        <div class="warp">
            <h1>這是孫子</h1>
            <p>{{ msg }}</p>
            <p>{{ setupMSG }}</p>
            <p>{{ cool }}</p>
            <p>{{ arr }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>
