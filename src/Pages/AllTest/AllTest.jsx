import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import TestCard from "../../Components/AlltestComponents/TestCard";

const AllTest = () => {

    const axiosPublic = AxiosPublic();

    const { data: AllTest = [] } = useQuery({
        queryKey: ["AllTest"],
        queryFn: async () => {
            const res = await axiosPublic.get("/test");
            return res.data;
        }
    });
    console.log(AllTest)


    const handleSearch = (e) => {
        e.preventDefault();

    };




    return (
        <div>
            <div>
                <h1 className="text-3xl text-center my-5 font-semibold text-[#3cabc7] ">All Featuring Test </h1>

                <div>
                    <form onChange={handleSearch} >
                        
                    </form>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-7">
                {
                    AllTest.map(test => <TestCard key={test._id} test={test}></TestCard>)
                }
            </div>
        </div>
    );
};

export default AllTest;
