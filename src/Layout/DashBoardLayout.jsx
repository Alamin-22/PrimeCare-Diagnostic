import { Outlet } from "react-router-dom";
import Footer from "../Components/HeaderFooter/Footer/Footer";
import Header from "../Components/HeaderFooter/Header/Header";


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