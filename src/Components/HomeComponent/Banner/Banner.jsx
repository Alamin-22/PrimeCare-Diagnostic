import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import AxiosPublic from "../../../Hooks/AxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Banner = () => {

    const axiosPublic = AxiosPublic();


    const { data: banner = [] } = useQuery({
        queryKey: ["banner"],
        queryFn: async () => {
            const res = await axiosPublic.get("/banner");

            return res.data;
        }
    });

    console.log(banner)


    return (
        <div>
            This is Banner


        </div>
    );
};

export default Banner;