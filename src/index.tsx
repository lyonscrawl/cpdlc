
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WebFont from "webfontloader";
import "./styles.css";

import App from "./App";

WebFont.load({
    google: {
        families: ["Noto Sans:300,700,600,400","Inter:600","Open Sans:400,700","Poppins"]
    }
});

document.body.style.backgroundColor = '#e5e5e5';

// If we open CodeSandbox, the sandpack Tailwind won't be included so this can inject it
const tw = document.createElement("script");
tw.setAttribute("src", "https://cdn.tailwindcss.com");
tw.setAttribute("type", "text/javascript");
document.body.appendChild(tw);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
