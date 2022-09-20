import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route } from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<App />} />)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
