import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
// import Sidebar from 'primevue/sidebar';
// import Badge from 'primevue/badge';
// import BadgeDirective from 'primevue/badgedirective';
// import Avatar from 'primevue/avatar';
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue).mount('#app')
// app.component('Button', Button);
// app.component('Sidebar', Sidebar);
// app.directive('badge', BadgeDirective);
// app.component("Avatar",Avatar)
