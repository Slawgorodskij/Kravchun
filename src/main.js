import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VScrollLock from "v-scroll-lock";

createApp(App).use(VScrollLock).use(router).mount("#app");
