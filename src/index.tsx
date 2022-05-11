import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { Auth0Provider } from "@auth0/auth0-react";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-wonbxh72.us.auth0.com"
    clientId="jEHmRFTESjNuyTDtAho5DtNt1FuhJdGY"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
