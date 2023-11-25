import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import animation from "../../public/Animation/Animation - 1700906331215.json";
import Lottie from 'lottie-react';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location.pathname)


    if (loading) {
        return (
            <div>
                <div className='h-[60vh] flex items-center'>
                    <Lottie animationData={animation} className='w-96 mx-auto '></Lottie>
                </div>

            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;