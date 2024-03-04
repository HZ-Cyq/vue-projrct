<template>
    <div>
       <input type="checkbox" id="todo-item" checked="false"/>
       <label for="todo-item">{{label}}</label> 
    </div>
</template>
<script>
    export default {
        data() {
            return {
                "text": "千里之行，始于足下",
            };
        },
        props: {
            // required为true:相当于告诉Vue,我们希望每个该组件的实例都必须有个label字段，如果ToDoItem组件没有label字段，Vue会提示警告。【只是提示警告，不会不显示】
            label: {required: true, type: String},
            done: {default: false, type: Boolean},
            count: {type: Number},
        }
    };
</script>