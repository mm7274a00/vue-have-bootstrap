<script>
export default{
    data(){
        return{
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<template>
    <div class="practice2">
    <div class="top area">
        <div class="top1"></div>
        <div class="top2"></div>
    </div>

    <div class="secondarea">
        <div class="leftarea"></div>
        <div class="rightarea">
            <div class="rightText">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis dolorum ad tempora ratione natus fuga
                    placeat odit voluptatem mollitia?</p>
            </div>
            <div class="rightbox">
                <div class="set" v-for="item in arr">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <!-- <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>

                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>

                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div>
                <div class="set">
                    <div class="boxes"></div>
                    <p>Product name</p>
                </div> -->
            </div>

        </div>
    </div>
    <div class="bottom area"></div>
</div>
</template>

<style lang="scss" scoped>
.practice2{
    margin: auto;
    width: 754px;
    border: 2px solid #86DDD3;
}
.top1 {
    height: 101px;
    background-color: #86DDD3;
}

.top2 {
    height: 264px;
    background-color: #CCF8F2;
}

.secondarea {
    display: flex;
    margin-top: 28px;

    .leftarea {
        width: 202px;
        height: 762px;
        background-color: #86DDD2;
    }

    .rightarea {
        margin-left: 30px;
        width: 552px;

        .rightbox {
            display: flex;
            flex-wrap: wrap;
        }

        .set {
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .boxes {
            width: 138px;
            height: 135px;
            background-color: #86DDD2;
        }
    }
}

.bottom {
    margin-top: 30px;
    height: 86px;
    background-color: #86DDD2;
}</style>
