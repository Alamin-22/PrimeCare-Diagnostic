import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {

  

    return (
        <div>
            <Carousel autoPlay="true" stopOnHover="true">
                <div>
                    <img src={"https://i.ibb.co/RTDdpHP/pexels-selvin-esteban-18129619.jpg"} />
                </div>
                <div>
                    <img src={"https://i.ibb.co/kXMDhR2/pexels-audrius-strikaitis-13357119.jpg"} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;