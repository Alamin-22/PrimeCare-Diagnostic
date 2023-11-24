import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderFooter/Header/Header";
import Footer from "../Components/HeaderFooter/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;