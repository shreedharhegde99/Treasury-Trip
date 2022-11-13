import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId="530099635609-9mdidp54usq2kb8lad34okj8coo2bfq7.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;

      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
