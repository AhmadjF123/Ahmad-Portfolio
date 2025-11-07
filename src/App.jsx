import React from "react";
import { createBrowserRouter, Router, Routes, Route } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import MyProjects from "./Pages/MyProjects";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/projects", element: <MyProjects /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
