<script>

</script>

<template>
    <div class="bgArea">
        <div class="imgbox"></div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea{
    width: 1440px;
    height: 854px;
    background-color: #BEC0CD;
    display: flex;
    justify-content: center;
    align-items: center
}

.imgbox{
    width: 500px;
    height: 500px;
    background-image: url(../../public/房地產圖片/tatemono_fudousanya.png);
    background-repeat: no-repeat;
}

//毛玻璃
.imgbox::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(10px);
}

</style>
