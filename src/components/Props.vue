<script>
import child from "../components/child.vue";
export default {
    data(){
        return{
            personal:{
                name:"mary",
                age:58,
                email:"XXXX@gmail.com"
            }
        }
    },
    components:{
        child
    }
}
</script>

<template>
    <div class="show">
        <child 
        :person="personal"/>
    </div>
</template>

<style lang="scss" scoped>


</style>
