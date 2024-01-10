import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { RoutesApp } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <UserProvider>
            <RoutesApp />
          </UserProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
