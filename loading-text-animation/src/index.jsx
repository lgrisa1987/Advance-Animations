import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class appAnim {
  constructor() {
    this.init();
  }
  init() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
}

const loadingTextAnimation = new appAnim();
