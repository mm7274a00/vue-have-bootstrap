<script>
export default {
    data(){
        return{}
    },
}
</script>

<template>
<div class="houseFull">
    <!--<div class="header page">
        <div class="color box"></div>

        <div class="com box">
            <input type="button" value="会社案内" class="button">
            <label for="">｜</label>
            <input type="button" value="店舖、アクセス">
        
        </div>

        <div class="phone box">
            <i class="fa-solid fa-phone"></i>
            <span><p>010-123456789</p></span>
        </div>

        <div class="login box">
            <input type="button" value="ログイン">
            <RouterLink to="/Login" class="log Btn">ログイン</RouterLink><RouterView />
            <label for="">｜</label>
            <input type="button" value="お問い合わせ" class="quz Btn">
    </div>-->
    <div class="middle page">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../public/房地產圖片/banner1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../public/房地產圖片/banner2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../public/房地產圖片/banner3.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>

    <div class="footer page">
        <div class="under">
        <a href="https://www.google.com.tw/"></a>
        <input type="button" value="タッグから探す">
        <a href="https://www.google.com.tw/"></a>
        <input type="button" value="エリアから探す">
        <a href="https://www.google.com.tw/"></a>
        <input type="button" value="沿線、駅から探す">
    </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
$maincolor:#475467;
.houseFull{
    width: 1440px;
    background-color: rgb(255, 255, 255);
}

.page{
    display: flex;
    justify-content: center;
    margin: 0;
    height: 50%;
    /*border: 3px solid black;*/
}

.middle{
    height: 481px;
}

.footer{
    margin-top: -8px;
    height: 373px;
    background-color: #BEC0CD;

    .under{
        width: 1440px;
        margin-top: 58px;
        display: flex;
        justify-content: center;
        
    }
    input{
        height: 161px;
        width: 278px;
        font-size: 16pt;
        border: 0;
        border-radius: 15px;
        margin: 42px;
        background-color: $maincolor;
        color: white;
    }
}
</style>
