import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import TestCard from "../../Components/AlltestComponents/TestCard";
import { useState } from "react";
import "./pagination.css"
const AllTest = () => {

    const axiosPublic = AxiosPublic();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(6);

    const { data: AllTest = [], refetch } = useQuery({
        queryKey: ["AllTest", currentPage, itemPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/test?page=${currentPage}&size=${itemPerPage}`);
            return res.data;
        }
    });


    const handleSearch = (e) => {
        e.preventDefault();
    };

    // pagination
    const { data: TestCount = [] } = useQuery({
        queryKey: ["TestCount"],
        queryFn: async () => {
            const res = await axiosPublic.get("/testCount");
            return res.data.count;
        }
    });

    const numberOfPages = Math.ceil(TestCount / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);
    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
        refetch();
    }
    const handleNextPage = () => {
        if (currentPage <= pages.length - 2) {
            setCurrentPage(currentPage + 1)
        }
        refetch();
    }


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
            <div className="pagination space-x-2 my-5">

                <button className="btn" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map((page, idx) => <button
                        className={currentPage === page ? " btn bg-[#219ebc] hover:bg-[#3c738f] text-white  " : "btn "}
                        onClick={() => setCurrentPage(page)}
                        key={idx}>{page}
                    </button>)
                }
                <button className="btn" onClick={handleNextPage}>Next</button>
                <select name="" id="" onChange={handleItemPerPage} className='options '>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>
            </div>
        </div>
    );
};

export default AllTest;
