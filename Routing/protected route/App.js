import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const ProtectedRoute = ({ isLoggedIn, setLoggedIn, children }) => {
    if (!isLoggedIn) {
      // Redirect to the home page or login page if the user is not logged in
      return <Navigate to="/login" replace={true} />;
    }
  
    return children;
  };  


    
  // create high-level protected route below

  // protect the routes for the contact, list and item details pages
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
        },
        {
          path: "/contact",
          // element: <Contact />
          element:(
            <ProtectedRoute isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}>
              <Contact />
            </ProtectedRoute>
            )
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              // element: <List />
              element:(
                <ProtectedRoute isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}>
                  <List />
                </ProtectedRoute>
                )
            },
            {
              path: ":itemId",
              // element: <ItemDetails/>
              element:(
              <ProtectedRoute isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn}>
                <ItemDetails />
              </ProtectedRoute>
              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
