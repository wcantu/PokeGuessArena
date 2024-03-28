// rendering the react app into the dom, imports main " app " components and renders it with the root html element

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
