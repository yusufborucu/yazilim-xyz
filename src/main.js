import Vue from 'vue';
import App from './App.vue';
import { router } from "./router";
import { store } from "./store/store";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  let token = localStorage.getItem("token");
  if (token)
    request.headers.set('Authorization', 'Bearer ' + token);
  next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});