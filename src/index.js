import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { AllReducers } from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const persistConfig = {
  key: "root",
  blacklist: ["Products"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const Store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(Store);

const domainId = process.env.REACT_APP_DOMAIN_ID;
const clientNumber = process.env.REACT_APP_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={domainId}
    clientId={clientNumber}
    redirectUri={window.location.origin}
  >
    <Provider store={Store}>
      <PersistGate
        loading={<LoadingOutlined spin={true} style={{ fontSize: "30px" }} />}
        persistor={persistor}
      >
        <BrowserRouter>
          <React.Suspense
            fallback={
              <LoadingOutlined spin={true} style={{ fontSize: "30px" }} />
            }
          >
            <App />
          </React.Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Auth0Provider>
);
