import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vuex from './Vuex.vue'

// let state = {
//     count: 1;
// }
// let mutations = {
//     jian(state) {
//         state.count--;
//     }
//     jia(state, n) {
//         state.count+=n.a;
//     }
// }
let app = createApp(Vuex);
let vm = app.mount("#app");