import Vue, { createApp } from "vue";

import "./index.css";

import App from "./App.vue";
import {createShadowContainer} from '../styleLoader';

const appPlaceholder = createShadowContainer('mf-marketing');

createApp(App).mount(appPlaceholder!);
