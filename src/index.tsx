import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const client = new QueryClient();

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
