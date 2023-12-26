import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import {createShadowContainer} from '../styleLoader';

const mount = (el: string | Element) => {
    const appPlaceholder = createShadowContainer('mf-marketing');
    createApp(App).mount(appPlaceholder!);


    // createApp(App).mount(appPlaceholder!);

};

export {mount};