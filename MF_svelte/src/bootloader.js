import Home from "./Home.svelte";

import "./index.scss";

const home = new Home({
  target: document.getElementById("app"),
});

window.app = home;

export default home;