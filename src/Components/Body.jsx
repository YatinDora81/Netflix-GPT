import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import SingleMoviePage from "./SingleMoviePage";


const Body = () => {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
    {
      path:"/movie/:id",
      element : <SingleMoviePage></SingleMoviePage>
    },
  ]);

  return (
    
      <RouterProvider router={routes}></RouterProvider>
  );
};

export default Body;
