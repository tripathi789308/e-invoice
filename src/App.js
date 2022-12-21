import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Modules/Register/Register";
import Login from "./Modules/Login/Login";
import DashBoard from "./Modules/DashBoard/DashBoard";
import RedirectPage from "./RedirectPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RedirectPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashBoard />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
