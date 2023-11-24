import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HOme/Home";
import Layout from "../Layout/Layout";
import Error from "../Pages/ErrorPage/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
                path: "/ContactUs",
                element: <ContactUs />
            }
        ]
    },
]);


export default router;