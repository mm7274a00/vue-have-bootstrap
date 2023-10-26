<script>
export default {
    props:[
    //"person",
    "sign",
    "signInfo",
    "name"
    ]
}
</script>

<template>
    <div class="textShow">
        <h3>Child，配合Props</h3>
        <!--{{ this.person }}-->
        {{ this.sign }}
        <label for="">姓名</label>
        <input type="text" v-model="sign.name">
        <!--emit-->
    </div>
</template>

<style lang="scss" scoped>
</style>
