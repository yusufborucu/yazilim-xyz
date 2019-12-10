import Vue from 'vue';
import App from './App.vue';
import { router } from "./router";
import { store } from "./store/store";
import VueResource from "vue-resource";
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';

Vue.use(VueResource);
Vue.use(Notifications);
Vue.use(Vuelidate);

Vue.http.interceptors.push((request, next) => {  
  // token varsa header a ekle
  let token = localStorage.getItem("token");
  if (token)
    request.headers.set('Authorization', 'Bearer ' + token);

  // api ye istek yapılırken loading i başlat
  store.dispatch("setLoadingAction", true);

  next(response => {
    // api den cevap dönünce loading i durdur
    store.dispatch("setLoadingAction", false);

    // api den gelen mesajı ekranda göster
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