import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import if using 1st & 2nd method


function App() {
  //NOTE*: IMPLEMENT ONLY ONE OF THE METHOD.

  const routerVar3 = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> }, // It means "equivalent to parent's path"
        { path: "/about", element: <About /> },
        { path: "/items", element: <Items /> },
      ],
    },
  ]);


  return (
    <>

       <RouterProvider router={routerVar3} /> 
    </>
  );
}

export default App;
