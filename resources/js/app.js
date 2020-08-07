require("./bootstrap");

window.Vue = require("vue");

import App from "./App.vue";

Vue.config.productionTip = false;

const app = new Vue({
    render: h => h(App)
}).$mount("#app");
