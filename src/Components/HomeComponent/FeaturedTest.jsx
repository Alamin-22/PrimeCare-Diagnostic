import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import TestCard from "../AlltestComponents/TestCard";
import Promotion from "./FeaturedSlider/Promotion";

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
        <div className="my-12">
            <div>
                <h1 className="text-4xl text-center my-5 font-serif font-medium">Explore Our Featured Test</h1>
                <p className="max-w-3xl mb-8 mx-auto text-center font-medium text-gray-500">Elevate your health journey with cutting-edge diagnostics at our clinic. From comprehensive screenings to specialized tests, discover the pinnacle of medical excellence for a healthier, happier you.</p>
            </div>


            <div className=' md:grid md:grid-cols-5 gap-6 mx-5'>
                <div className="col-span-2 mb-7">
                    <Promotion></Promotion>
                </div>
                <div className='col-span-3'>
                    <div className='max-w-4xl'>
                        <div className="grid grid-cols-1 lg:grid-cols-2  px-5 gap-7">
                            {
                                FeaturedTests.slice(0, 4).map(test => <TestCard key={test._id} test={test}></TestCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10 md:ml-96">
                <button className="btn bg-[#219ebc] hover:bg-[#3c738f] text-white ">Explore All Featured Test</button>
            </div>
        </div>
    );
};

export default FeaturedTest;

