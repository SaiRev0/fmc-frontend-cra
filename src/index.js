import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <CartProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartProvider>
  </React.Fragment>
);
