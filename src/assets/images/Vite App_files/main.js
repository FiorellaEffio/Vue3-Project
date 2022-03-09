import { createApp } from '/node_modules/.vite/vue.js?v=31228095'
import App from '/src/App.vue'
import '/src/index.css?t=1646838598693'
import router from '/src/router/index.js?t=1646838598693';
import { createPinia } from '/node_modules/.vite/pinia.js?v=31228095'
import VueGoogleMaps from '/node_modules/.vite/@fawmi_vue-google-maps.js?v=31228095'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBEPNDzeSMIWd3nvrw3Ho_wGxHw-yK37BQ',
  }
})
app.mount('#app');
