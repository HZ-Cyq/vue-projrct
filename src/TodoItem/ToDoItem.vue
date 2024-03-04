<template>
    <div>
       <input type="checkbox" :id="id" :checked="isDone"/>
       <label :for="id">{{label}}</label> 
       <!-- <input type="checkbox" id="todo-item" :checked="isDone"/> -->
       <!-- <label :for="label">dwq</label> -->
    </div>
</template>
<script>
import uniqueId from "lodash.uniqueid";
    export default {
        // 使用props让组件动态化，prop的值给予了组件影响其显示的初始状态
        props: {
            // required为true:相当于告诉Vue,我们希望每个该组件的truetrue须有个label字段，如果ToDoItem组件没有label字段，Vue会提示警告。【只是提示警告，不会不显示】
            label: {required: true, type: String},
            done: {default: false, type: Boolean},
            id: {required: true, type:String},
        },
        // Vue的数据对象，在应用程序中，我们没有记录todoitem是否已完成，使用data可以记录该状态。
        data() {
            return {
                isDone: this.done,
            };
        },
    };
</script>