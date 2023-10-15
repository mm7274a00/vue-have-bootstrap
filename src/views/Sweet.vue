<script>
//https://www.figma.com/file/ccDhQkKwkeNk12mqmS26Us/%E5%89%8D%E7%AB%AF%E7%B7%B4%E7%BF%922---dessert-shop?type=design&node-id=0-1&mode=design&t=zbjH5FhPByoQFbRI-0

</script>

<template>
    <div class="practice sweet">

        <div class="top Area">
            <div class="topbox"></div>
            <img src="../assets/stylesheet/甜點圖片/Group 10.png" alt="" class="group">
        </div>

        <div class="second Area">
            <div class="leftText">
                <h1>Title</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae autem harum illum vero ut fugiat molestiae eius eos! Eius.</h4>
            </div>
            <img src="../assets/stylesheet/甜點圖片/1.png" alt="" width="379px" height="300px">
        </div>
        
        <h2 class="onsale Area">On Sale</h2>

        <div class="third Area">
            <div class="setBox" >
                <img src="../assets/stylesheet/甜點圖片/3.png" alt="" srcset="" width="196px" height="242px">
                <div class="setText" >Item</div>
            </div>
            <div class="setBox" >
                <img src="../assets/stylesheet/甜點圖片/2.png" alt="" srcset="" width="196px" height="242px">
                <div class="setText" >Item</div>
            </div>
            <div class="setBox" >
                <img src="../assets/stylesheet/甜點圖片/4.png" alt="" srcset="" width="196px" height="242px">
                <div class="setText" >Item</div>
            </div>
        </div>

        <div class="line Area">
        </div>

        <h2 class="news Area">News</h2>

        <div class="four Area">
            <div class="card">
                <img src="../assets/stylesheet/甜點圖片/5.png" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Details</a>
    </div>
            </div>
            <div class="card">
                <img src="../assets/stylesheet/甜點圖片/6.png" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Details</a>
    </div>
            </div>
            <div class="card">
                <img src="../assets/stylesheet/甜點圖片/7.png" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Details</a>
    </div>
            </div>
        </div>
        <button type="button" class="more Area">More</button>
        <div class="five Area">
            <img class="img8" src="../assets/stylesheet/甜點圖片/8.png" alt="" srcset="" width="405px" height="267px">
            <div class="rightText">
                <h2>New Arrival</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione temporibus hic nisi, voluptatem blanditiis est aspernatur alias quaerat libero iste sunt adipisci culpa. Nam voluptate quia saepe.</p>
            </div>
        </div>
        <div class="bgPage"></div>
        <div class="bottom"></div>
    </div>
</template>

<style lang="scss" scoped>
.sweet{
    margin: auto;
    height: 2046px;
    width: 785px;
    background-color: #FFFAEA;
    border: 3px solid #E49E9E;
}
.Area{
    margin: 56px 62px;
    //border: 2px solid black;
    display: flex;
    justify-content: center;
}
.top{
    margin: 62px;
    height: 98px;
    justify-content: space-between;
    .topbox{
        width: 98px;
        height: 98px;
        background-color: #E49E9E;
    }
    .group{
        width: 35px;
        height: 34px;
    }
}
.second{
    height: 300px;
    display: flex;
    justify-content: space-between;
    .leftText{
        width: 261px;
        height: 248px;
    }
}
.third{
    justify-content: space-between;
    margin-top: 36px;
    height:242px;
    }
    .setText{
        margin:25px;
        margin-top: -60px;
        position: absolute;
        width: 140px;
        height: 42px;
        background-color: #D38282;
        color: white;
        font-size: 20pt;
        text-align: center;
    }
.line{
    margin-top: 57px;
    height: 2px;
    background-color: rgb(0, 0, 0);
}

.four{
    justify-content: space-between;
    height: 264px;
    .card{
        width: 196px;
        p{
            font-size: 10pt;
        }
        .btn{
            position: absolute;
            margin-top: -10px;
            width: 90px;
            height: 26px;
            font-size: 12pt;
            background-color: #343434;
            color: white;
        }
    }
}
.more{
    margin: 34px auto;
    width: 125px;
    height: 36px;
    color: white;
    background-color: #D38282;
    border: 0;
}

.five{
    align-items: center;
    justify-content: space-between;
    height: 370px;
    .img8{
        z-index: 2;
    }
    .rightText{
        h2{ 
            margin-top: 32px;
            text-align: center;
        }
        p{  
            font-size: 9pt;
            margin: 30px;
        }
        margin-left: 37px;
        background-color: #F7CDC0;
    }
}
.bgPage{
        margin-top: -420px;
        position: absolute;
        height: 370px;
        width: 402px;
        background-color: #D38282;
    }
.bottom{
    height: 79px;
    background-color: #E49E9E;
}
</style>
