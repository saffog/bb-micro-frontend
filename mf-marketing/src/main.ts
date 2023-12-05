import { createApp } from "vue";
import "./index.scss";
import App from "./App.vue";

const mount = (el: string | Element) => {
    createApp(App).mount(el);
};

export {mount};