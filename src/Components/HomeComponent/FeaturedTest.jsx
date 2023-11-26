import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import TestCard from "../AlltestComponents/TestCard";
import { Link } from "react-router-dom";

const FeaturedTest = () => {


    const axiosPublic = AxiosPublic();
    const { data: FeaturedTests = [] } = useQuery({
        queryKey: ["FeaturedTests"],
        queryFn: async () => {
            const res = await axiosPublic.get("/test");
            const featuredTests = res.data.filter((test) => test.featured);
            return featuredTests;
        }
    });
    console.log(FeaturedTests)


    return (
        <div>
            <div>
                <h1 className="text-4xl text-center my-5 font-serif font-medium">Explore Our Featured Test</h1>
                <p className="max-w-3xl mb-8 mx-auto text-center font-medium text-gray-500">Elevate your health journey with cutting-edge diagnostics at our clinic. From comprehensive screenings to specialized tests, discover the pinnacle of medical excellence for a healthier, happier you.</p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-7">
                    {
                        FeaturedTests.slice(0, 6).map(test => <TestCard key={test._id} test={test}></TestCard>)
                    }
                </div>
                <div className="flex justify-center">
                    <Link  to={"/allTest"} className="btn btn-accent mt-5 text-white ">Explore All Test</Link>
                </div>

            </div>
        </div>
    );
};

export default FeaturedTest;