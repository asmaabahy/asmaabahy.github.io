import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);