import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import if using 1st & 2nd method
import { createRoutesFromElements, Route } from "react-router-dom"; // import if using 2nd method

function App() {
  //NOTE*: IMPLEMENT ONLY ONE OF THE METHOD.

  //without routing
  const [page, setPage] = useState("home");

  // with routing: method-1(preferred)
  const routerVar1 = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/items", element: <Items /> },
  ]);

  
  // with routing: method-2
  // const routerVar2 = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </>
  // );
  // const router2 = createBrowserRouter(routerVar2);

  // with routing: method-3 (this method allows the navbar to be present over all the components without delcaring it on all components hence removes the redundency)
  const routerVar3 = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        // { path: "/", element: <Home /> },
        { index: true, element: <Home /> }, // It means "equivalent to parent's path"
        { path: "/about", element: <About /> },
        { path: "/items", element: <Items /> },
      ],
    },
  ]);

  // with routing: method-4
  // const routerVar4 = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/items" element={<Items />} />
  //     </Route>
  //   </>
  // );
  // const router4 = createBrowserRouter(routerVar4);


  const routerVar5 = createBrowserRouter([
    //absolute path
    {
      path: "/root",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/root/about", element: <About /> },   // have to give complete address from parent.
        { path: "/root/items", element: <Items /> },
      ],
    },

    // relative path(preferred)
    // {
    //   path: "/root",
    //   element: <Navbar />,
    //   children: [
    //     { path: "", element: <Home /> },
    //     { path: "about", element: <About /> }, // without '/' it'll automatically append after parent address.
    //     { path: "items", element: <Items /> },
    //   ],
    // },
  ]);


    // with dynamic routing: method-6 
    const routerVar6 = createBrowserRouter([
      {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage/>,   // it'll only handle error of its children
        children: [
          { index: true, element: <Home /> }, // It means "equivalent to parent's path"
          { path: "about", element: <About /> },
          // { path: "/items", element: <Items /> },
          // {
          //   path:"items/:itemId",  //it is just like a variable in routing it is called params(variable name followed by ':' its like a props, import it with the same name(i.e itemId in ItemDetails)). It is helpful, as instead of writing muliple routing for individual items we can define only one which'll handle all.
          //   element: <ItemDetails/>
          // },
          { path: "items", 
          children:[
            {index:true, element: <Items /> },  // here, u don't need outlet
            {
              path:":itemId",  //it is just like a variable in routing it is called params(variable name followed by ':' its like a props, import it with the same name(i.e itemId in ItemDetails)). It is helpful, as instead of writing muliple routing for individual items we can define only one which'll handle all.
              element: <ItemDetails/>
            }
          ]},

        ],
      },
    ]);

  return (
    <>
      {/*without routing*/}
      {/*<Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "items" && <Items />} */}

      {/* for routing method-1 */}
      {/* <RouterProvider router={routerVar1} /> */}

      {/* for routing method-2 */}
      {/* <RouterProvider router={router2} />  */}

      {/* for routing method-3 */}
      {/* <RouterProvider router={routerVar3} /> */}

      {/* for routing method-4 */}
      {/* <RouterProvider router={router4} /> */}

      {/* for routing method-5 ( run on http://localhost:3000/root/ )*/}
      {/* <RouterProvider router={routerVar5} />  */}

      {/* for routing method-6(dynamic-routing)*/}
       <RouterProvider router={routerVar6} /> 
    </>
  );
}

export default App;
