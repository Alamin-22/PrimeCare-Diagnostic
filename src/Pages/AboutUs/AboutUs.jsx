import Docs from "./AboutComponents/Docs";
import Gallery from "./AboutComponents/Gallery";
import Intro from "./AboutComponents/Intro";
import Pricing from "./AboutComponents/Pricing";

const AboutUs = () => {
    return (
        <div className="bg-slate-100">
            <Intro></Intro>
            <Gallery></Gallery>
            <Docs></Docs>
            <Pricing></Pricing>
        </div>
    );
};

export default AboutUs;