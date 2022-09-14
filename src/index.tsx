import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LanguageProvider from "./contexts/LanguageContext";
import ProjectsProvider from "./contexts/ProjectsContext";
import UsersProvider from "./contexts/UsersContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <ProjectsProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ProjectsProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
