import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import {createRoot} from "react-dom/client";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(<App />);