<template>
    <div>
        {{text}}
    </div>
    <!-- <div>
        使用mutation触发改变状态{{$main.state.count}}
    </div> -->
    <button @click="func11">点击</button>
    <main>
        <HelloWorld />
    </main>
</template>
<script>
    import HelloWorld from './components/HelloWorld.vue';
    export default {
    name:"Vuex",
    data() {
      return {
        text:'千里之行，始于足下',
      }
    },
    methods:{
        func11() {
            let a = this;
            console.log(a);
            this.set("text", "天下大事，必作于细");
        },
    },
    components:{
        HelloWorld,
        HelloWorld
    }
  };
</script>