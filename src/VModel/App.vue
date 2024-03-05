<template>
    <div id="app">
        <input text="text" v-model.lazy="message">
        <p>您输入的内容是：{{ message }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                message:"",
            }
        },
    }
</script>