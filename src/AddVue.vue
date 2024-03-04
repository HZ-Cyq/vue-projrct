<script setup>
import ToDoItem from './components/ToDoItem.vue';
</script>

<template>
  <div>
    <ToDoItem label="My ToDo Item" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text:'千里之行，始于足下',
      }
    },
  }

</script>
