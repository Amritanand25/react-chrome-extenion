// content.js
import React from "react";
import ReactDOM from "react-dom/client";
import './content.css';
import {Provider} from 'react-redux'
import ButtonComponent from "./src/ButtonComponent";
import store from "./redux/store";
console.log("Anand");
// Create a container element for the React component
const container = document.createElement("div");
container.id = "my-chrome-extension-root";
document.body.prepend(container);

const root = ReactDOM.createRoot(
  document.getElementById("my-chrome-extension-root")
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ButtonComponent />
    </Provider>
  </React.StrictMode>
);
