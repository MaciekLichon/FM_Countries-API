import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import "./styles/normalize.scss";
import "./styles/general.scss";
import "./styles/typography.scss";

import { DarkModeContextProvider } from "./context/darkModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename={'/FM_Countries-API/'}>
            <Provider store={store}>
                <DarkModeContextProvider>
                    <App />
                </DarkModeContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
