import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//IMPORTANDO STORE Y PROVIDER
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
//IMPORTANDO AUTH0
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirect = import.meta.env.VITE_REDIRECT_AUTH0_CALLBACK_URL;

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <Auth0Provider 
        domain={domain}
        clientId={clientId}
        redirectUri={redirect}
        >
        <App />
      </Auth0Provider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
