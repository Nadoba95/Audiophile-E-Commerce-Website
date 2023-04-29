import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import store from "./store";
import "./scss/style.scss";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
