import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBEPNDzeSMIWd3nvrw3Ho_wGxHw-yK37BQ',
  }
})
app.mount('#app');
