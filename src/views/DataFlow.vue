<script>
import flowChild from '../components/DataFlowPage/FlowChild.vue';
import flowChild2 from '../components/DataFlowPage/Flowchild2.vue';
export default{
    data(){
        return{
            obj:{
            },
            page: false
        }
    },
    components:{
        flowChild,
        flowChild2,
    },
    methods: {
        infoGet(info){
            this.obj = info;
            console.log(this.obj);//顯示於主控台
        },
        pageChange(){
            this.page = !this.page;
        }
    }
}
</script>

<template>
    <h1>DataFlow</h1>
    <h1>{{ this.obj }}</h1>
    <div v-show = "page == false" class="show">
        <flowChild @get = "infoGet" />
        <button type="button" @click="pageChange">pageChange</button>
    </div>
    <div v-show = "page == true" class="show2">
        <flowChild2 :name="obj.name" :age= "obj.age" />
        <button type="button" @click="pageChange">pageChange2</button>
    </div>
</template>

<style lang="scss" scoped>
.show{
    height: 100%;
}

</style>
