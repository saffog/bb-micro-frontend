import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";

const mount = (el: string | Element) => {
    createApp(App).mount(el);
};

export {mount};