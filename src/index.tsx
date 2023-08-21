import React from "react";
import {App} from "./app/App";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(
    <Provider store={store}>
            <App/>
    </Provider>
);