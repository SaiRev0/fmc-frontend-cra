import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { CartProvider } from "react-use-cart";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <CartProvider>
      <AuthContextProvider>
        <GoogleOAuthProvider clientId="964624758507-5uug57ovlbqaiukke1llkmtmbsmhs7m6.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </AuthContextProvider>
    </CartProvider>
  </React.Fragment>
);
