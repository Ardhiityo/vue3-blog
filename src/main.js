import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// Bootstrap

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
// Font Awesome

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')