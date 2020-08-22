import "../sass/app.scss"
import "./bootstrap"

import axios from "axios"
import Vue from "vue"
import VueAuth from "@websanova/vue-auth"
import VueAxios from "vue-axios"
import VueRouter from "vue-router"
import Index from "./Index"
import auth from "./auth"
import store from "./store/store"

import router from "./router/router"

window.Vue = Vue

Vue.router = router
Vue.use(VueRouter)

Vue.use(VueAxios, axios)
axios.defaults.baseURL = `/api`
Vue.use(VueAuth, auth)

// Load Index
Vue.component("index", Index)
const app = new Vue({
  el: "#app",
  router,
  store,
})
