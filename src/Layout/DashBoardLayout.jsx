import { Outlet } from "react-router-dom";
import Footer from "../Components/HeaderFooter/Footer/Footer";
import Header from "../Components/HeaderFooter/Header/Header";
import useAdmin from "../Hooks/useAdmin";


const DashBoardLayout = () => {

    // eslint-disable-next-line no-unused-vars
    const [isAdmin, adminLoading] = useAdmin();


    return (
        <div>
            {
                adminLoading ?
                    <div className="flex flex-col gap-4 w-full">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    :
                    <>
                        <Header></Header>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </>
            }

        </div>
    );
};

export default DashBoardLayout;