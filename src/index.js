import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { store } from "./store";

const domainId = process.env.REACT_APP_DOMAIN_ID;
const clientNumber = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={domainId}
    clientId={clientNumber}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense
          fallback={
            <LoadingOutlined spin={true} style={{ fontSize: "30px" }} />
          }
        >
          <App />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
