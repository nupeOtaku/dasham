import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { FormDataProvider } from "./contexts/FormDataContext.jsx";
import { ModifyProvider } from "./contexts/ModifyContext.jsx";
import { MenuProvider } from "./contexts/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormDataProvider>
        <AuthContextProvider>
          <MenuProvider>
            <ModifyProvider>
              <App />
            </ModifyProvider>
          </MenuProvider>
        </AuthContextProvider>
      </FormDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
