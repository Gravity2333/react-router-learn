import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "./components/MyReactRouter";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <HashRouter>
  //   <App />
  // </HashRouter>
);
