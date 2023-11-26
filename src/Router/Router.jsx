import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HOme/Home";
import Layout from "../Layout/Layout";
import Error from "../Pages/ErrorPage/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Authenticate/Login/Login";
import SingUp from "../Pages/Authenticate/SingUp/SingUp";
import AllTest from "../Pages/AllTest/AllTest";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Profile from "../DashboardPage/Profile/Profile";
import PrivateRoute from "../Private/PrivateRoute";
import UpComingAppointments from "../DashboardPage/UpcomingAppointments/UpComingAppointments";
import TestResult from "../DashboardPage/Test/TestResult";

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
        path: "dashBoard",
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "ComingAppointments",
                element: <PrivateRoute><UpComingAppointments></UpComingAppointments></PrivateRoute>
            },
            {
                path: "testResult",
                element: <PrivateRoute><TestResult></TestResult></PrivateRoute>,
            }

        ]

    }
]);




export default router;