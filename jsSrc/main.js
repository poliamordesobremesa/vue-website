import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

// Nucleo Icons
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';

import materialKit from './material-kit';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount('#app');
