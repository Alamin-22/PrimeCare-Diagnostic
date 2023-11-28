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
import AddTest from "../DashboardPage/AddTest/AddTest";
import AdminAllTests from "../DashboardPage/AdminAllTests/AdminAllTests";
import AddBanner from "../DashboardPage/AdminBanner/AddBanner";
import AllUsers from "../DashboardPage/AllUsers/AllUsers";
import Reservation from "../DashboardPage/Reservation/Reservation";
import AdminProfile from "../DashboardPage/AdminProfile/AdminProfile";
import UpdateTest from "../DashboardPage/AdminAllTests/UpdateTest";
import ManageBanner from "../DashboardPage/AdminBanner/ManageBanner";
import TestDetails from "../Pages/AllTest/TestDetails";
import AdminRoute from "../Private/AdminRoute";

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
                path: "/testDetails/:id",
                element: <PrivateRoute><TestDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/test/${params.id}`)
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
        element: <PrivateRoute> <DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "UserProfile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "ComingAppointments",
                element: <PrivateRoute><UpComingAppointments></UpComingAppointments></PrivateRoute>
            },
            {
                path: "testResult",
                element: <PrivateRoute><TestResult></TestResult></PrivateRoute>,
            },
            {
                path: "AdminProfile",
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>,
            },
            {
                path: "addTest",
                element: <AdminRoute><AddTest></AddTest></AdminRoute>,
            },
            {
                path: "UpdateTest/:id",
                element: <AdminRoute><UpdateTest></UpdateTest></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/test/${params.id}`)
            }
            ,
            {
                path: "observeAllTest",
                element: <AdminRoute><AdminAllTests></AdminAllTests></AdminRoute>,
            },
            {
                path: "addBanner",
                element: <AdminRoute><AddBanner></AddBanner></AdminRoute>,
            },
            {
                path: "manageBanner",
                element: <AdminRoute><ManageBanner></ManageBanner></AdminRoute>,
            },
            {
                path: "observeAllUsers",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: "reservation",
                element: <AdminRoute><Reservation></Reservation></AdminRoute>,
            }

        ]

    }
]);




export default router;