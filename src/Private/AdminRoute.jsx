import { Navigate, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, adminLoading] = useAdmin();

    const location = useLocation();

    if (loading || adminLoading) {
        return <>
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={"/"} state={location.pathname} replace></Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.node,
};
export default AdminRoute;