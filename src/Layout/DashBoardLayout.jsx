import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderFooter/Header/Header";
import Footer from "../Components/HeaderFooter/Footer/Footer";

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;