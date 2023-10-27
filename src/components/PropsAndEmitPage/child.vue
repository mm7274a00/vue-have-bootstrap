<script>
export default {
    props:[
    "person",
    // "signInfo",
    "sign",
    ],
}
</script>

<template>
    <div class="textShow">
        <h3>Child，接收Props資料</h3>
        <!--{{ this.person }}-->
        <!-- {{ this.sign }} -->
    </div>
    <div class="show">
        <label for="">姓名：{{ this.sign.name }}</label>
        <label for="">電話：{{ this.sign.phone }}</label>
        <label for="">Email：{{ this.sign.email }}</label>
        <label for="">地址：{{ this.sign.address }}</label>
        <label for="">畢業學校：{{ this.sign.school }}</label>
        <label for="">性別：{{ this.sign.gender }}</label>
        <label for="">興趣：{{ this.sign.favorite }}</label>
    </div>
</template>

<style lang="scss" scoped>
.show{
    display: flex;
    flex-direction: column;
    font-size: 18pt;
}
</style>
