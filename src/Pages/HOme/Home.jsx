import Banner from "../../Components/HomeComponent/Banner/Banner";
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
        </div>
    );
};

export default Home;