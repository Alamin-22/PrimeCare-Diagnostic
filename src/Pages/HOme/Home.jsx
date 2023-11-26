import Banner from "../../Components/HomeComponent/Banner/Banner";
import Blogs from "../../Components/HomeComponent/Blogs";
import FeaturedTest from "../../Components/HomeComponent/FeaturedTest";
import Features from "../../Components/HomeComponent/Features";
import SpecialOffer from "../../Components/HomeComponent/SpecialOffer";
import Support from "../../Components/HomeComponent/support";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Support></Support>
            <Features></Features>
            <SpecialOffer></SpecialOffer>
            <FeaturedTest></FeaturedTest>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;