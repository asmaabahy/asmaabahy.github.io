import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import { lazy, Suspense } from "react";
import Home from "../pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

export const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
              <Contact />
            </QueryClientProvider>
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
