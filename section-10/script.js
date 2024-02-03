import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Src/Component/Header";
import Body from "./Src/Component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Src/Component/About";
import Contact from "./Src/Component/Contact";
import Error from "./Src/Component/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./Src/Component/RestaurantMenu";

const Grocery = lazy(() => import("./Src/Component/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // children routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
