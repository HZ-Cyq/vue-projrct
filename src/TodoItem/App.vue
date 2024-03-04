<template>
    <div id = "app">
        <h1>To-Do List</h1>
            <ul>
                <li>
                    <to-do-item label="this is a label in App.vue" :done="true"></to-do-item>
                </li>
            </ul>
    </div>
</template>
<script>
    import ToDoItem from './ToDoItem.vue';
    export default {
        name:"app",
        components:{
            ToDoItem,
        }
    }
</script>