import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params})=>fetch(`http://localhost:4550/services/${params.id}`)
        },
        {
          path: "bookings",
          element: <PrivateRoutes><Bookings/></PrivateRoutes>,
        }
      ]
    },
  ]);

export default router