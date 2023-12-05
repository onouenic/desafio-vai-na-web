import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Projects from "./components/Projects";
import { createGlobalStyle } from "styled-components";
// import router from "./components/Router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sobre",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projetos",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
]);

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalReset />
    <RouterProvider router={router} />
  </React.StrictMode>
);
