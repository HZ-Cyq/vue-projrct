<template>
    <input type="checkBox" :id="id" :checked="isDone"></input>
    <label :for="id">{{label}}</label>
</template>
<script>
    export default{
        props:{
            label:{required:true, type:String},
            id:{required:true, type:String},
            done:{default:false, type:Boolean},
        },
        data() {
            return {
                isDone: this.done,
            }
        },
    }
</script>
