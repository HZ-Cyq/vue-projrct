<template>
    <h1>my to do list</h1>
    <ul>
        <li v-for="item in ToDoItems" :key="item.id">
            <to-do-item :id="item.id" :label="item.label" :done="item.done"></to-do-item>
        </li>
    </ul>
</template>
<script>
    import ToDoItem from "./ToDoItem.vue";
    import uniqueId from "lodash.uniqueid";
    export default {
        components: {
            ToDoItem,
        },
        data(){
            return {
                ToDoItems:[
                    {id:uniqueId("todo-"), label:"回顾昨天的学习内容-渲染Vue组件列表(10:30)", done:true},
                    {id:uniqueId("todo-"), label:"使用Vue event、method和model添加一个新的todo表单(11:30)", done:false},
                    {id:uniqueId("todo-"), label:"使用CSS为Vue组件添加样式(14:00)", done:false},
                    {id:uniqueId("todo-"), label:"Vue中的计算属性(15:00)", done:false},
                    {id:uniqueId("todo-"), label:"Vue中的条件渲染：编辑现有的待办事项(16:00)", done:false},
                    {id:uniqueId("todo-"), label:"使用Vue模板引用进行焦点管理(17:00)", done:false},
                    {id:uniqueId("todo-"), label:"今日学习总结(18:00)", done:false},
                ]
            }
        },
    }
</script>