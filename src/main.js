import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
/*import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDsG0RALh4UVzRkT8hWClse_w6lcO0FAbI",
    authDomain: "applog-c48d4.firebaseapp.com",
    projectId: "applog-c48d4",
    storageBucket: "applog-c48d4.appspot.com",
    messagingSenderId: "851437728482",
    appId: "1:851437728482:web:9f35ecd9447768056ba4bb"
};
firebase.initializeApp(firebaseConfig);*/
createApp(App).use(store).use(router).mount('#app')
