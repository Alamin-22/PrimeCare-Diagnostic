import Docs from "./AboutComponents/Docs";
import Intro from "./AboutComponents/Intro";

const AboutUs = () => {
    return (
        <div className="bg-slate-100">
            <Intro></Intro>
            <Docs></Docs>
        </div>
    );
};

export default AboutUs;