import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App);
let vm = app.mount("#app");
console.log("before log vm");
console.log(vm);
console.log("after log vm");
console.log("app.text: " + app._component.data().text);
