import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import App from './App.vue'
import Button from "primevue/button"

const app = createApp(App)
app.use(PrimeVue).mount('#app')
app.component('Button', Button);
