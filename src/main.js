import Vue from 'vue';
import App from './App.vue';
import { router } from "./router";
import { store } from "./store/store";
import VueResource from "vue-resource";
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';
import hljs from 'highlight.js';
import VueSocketIO from 'vue-socket.io';

Vue.use(VueResource);
Vue.use(Notifications);
Vue.use(Vuelidate);

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    let targets = el.querySelectorAll('code');
    targets.forEach((target) => {
      if (binding.value) {
        target.innerHTML = binding.value;
      }
      hljs.highlightBlock(target);
    });
  },
  componentUpdated: function(el, binding) {
    let targets = el.querySelectorAll('code');
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value;
        hljs.highlightBlock(target);
      }
    });
  }
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://yazilim-xyz-socket.herokuapp.com'
}));

Vue.http.interceptors.push((request, next) => {  
  let token = localStorage.getItem("token");
  if (token)
    request.headers.set('Authorization', 'Bearer ' + token);

  store.dispatch("setLoadingAction", true);

  next(response => {
    store.dispatch("setLoadingAction", false);

    if (response.body.type && response.body.title && response.body.text) {
      Vue.notify({
        group: 'app',
        type: response.body.type,
        title: response.body.title,
        text: response.body.text,
        duration: 1000,
        speed: 1000
      });
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});