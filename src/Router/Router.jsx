import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HOme/Home";
import Layout from "../Layout/Layout";
import Error from "../Pages/ErrorPage/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Authenticate/Login/Login";
import SingUp from "../Pages/Authenticate/SingUp/SingUp";
import UserDashBoard from "../DashBoard/User/UserDashBoard";
import AllTest from "../Pages/AllTest/AllTest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/About",
                element: <AboutUs />,
            },
            {
                path: "/Blog",
                element: <Blog />,
            },
            {
                path: "/allTest",
                element: <AllTest />,
            },
            {
                path: "/ContactUs",
                element: <ContactUs />
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/singUp",
        element: <SingUp></SingUp>,
        loader: () => fetch("/public/Data/District.json")
    },
    {
        path: "/dashBoard",
        element: <UserDashBoard></UserDashBoard>,

    }
]);




export default router;