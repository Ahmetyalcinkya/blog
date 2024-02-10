import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
import SwitchContextProvider from "./Contexts/SwitchContext";
import LangContextProvider from "./Contexts/LanguageContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LangContextProvider>
      <SwitchContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SwitchContextProvider>
    </LangContextProvider>
    <ToastContainer />
  </Provider>
);
