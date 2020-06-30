import React from "react";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import history from "./utils/history";
import Routes from "./routes/index";
import { store, persistor } from "./store";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./styles.scss";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
