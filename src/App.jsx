import React, { Component } from "react";
import Layout from "./Layout/Layout";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portofolio from "./Portofolio/Portofolio";
import Contact from "./Contact/Contact";
const projRouting = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Portofolio", element: <Portofolio /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
  {path:"*",element: <p className="text-center">4 0 4 Page Not Found!</p>}
]);

export default class App extends Component {
  render() {
    return <>
        <RouterProvider router={projRouting} />
      </>
    
  }
}
