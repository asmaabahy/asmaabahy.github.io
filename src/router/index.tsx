import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomeLayout from "../layouts/HomeLayout";
import { lazy, Suspense } from "react";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          { path: "experience", element: <Experience /> },
          { path: "skills", element: <Skills /> },
          { path: "projects", element: <Projects /> },
        ],
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
