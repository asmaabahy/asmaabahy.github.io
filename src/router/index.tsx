import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { lazy, Suspense } from "react";
import Home from "../pages/Home";

const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<p>Loading ...</p>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<p>Loading ...</p>}>
            <Blog />
          </Suspense>
        ),
      },
    ],
  },
]);
