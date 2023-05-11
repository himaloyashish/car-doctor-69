import Main from "../layout/Main";
import Home from "../page/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login/Login";
import SignUp from "../page/signup/SignUp";
import Checkout from "../page/CheckOut/Checkout";
import Bookings from "../page/Bookings/Bookings";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            }
        ]
    }
])

export default router;
