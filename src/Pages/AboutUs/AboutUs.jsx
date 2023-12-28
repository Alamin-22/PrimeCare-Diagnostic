import Docs from "./AboutComponents/Docs";
import Gallery from "./AboutComponents/Gallery";
import Intro from "./AboutComponents/Intro";

const AboutUs = () => {
    return (
        <div className="bg-slate-100">
            <Intro></Intro>
            <Gallery></Gallery>
            <Docs></Docs>
        </div>
    );
};

export default AboutUs;