import './assets/main.css';
import "./assets/reset.css";

import { createApp } from 'vue';
import App from './TodoItem/App.vue';

let app = createApp(App);
let vm = app.mount("#app");