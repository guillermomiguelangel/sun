import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App';
import { GiftsPage } from "./gifts/GiftsPage";
import { RecipesPage } from "./recipes/RecipesPage";
import './index.scss';
import { StartPage } from "./start/StartPage";
import { WelcomeLayout } from "./layout/WelcomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        path: "",
        element: <StartPage />,
      },
      {
        path: "welcome",
        element: <WelcomeLayout />,
      },
      {
        path: "gifts",
        element: <GiftsPage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
