import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Hooks/AxiosPublic";
import TestCard from "../../Components/AlltestComponents/TestCard";
import { useState } from "react";
import "./pagination.css"
import { FaSearch } from "react-icons/fa";
const AllTest = () => {

    const axiosPublic = AxiosPublic();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(6);
    const [searchItems, setSearchItems] = useState('');
    const [filteredTests, setFilteredTests] = useState([]);
    const { data: AllTest = [], refetch } = useQuery({
        queryKey: ["AllTest", currentPage, itemPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/test?page=${currentPage}&size=${itemPerPage}`);
            return res.data;
        }
    });


    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = AllTest.filter(test =>
            test.availableDates &&
            test.availableDates.includes(searchItems) &&
            parseDate(test.availableDates) >= new Date().setHours(0, 0, 0, 0)
        );
        setFilteredTests(filtered);
    };
    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split('-').map(Number);
        return new Date(year, month - 1, day);
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
                    <form onChange={handleSearch} className="my-5">
                        <div className="flex md:w-full flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:space-x-0 md:flex-row md:justify-center">
                            <input
                                type="text"
                                className="md:w-3/4 input input-accent"
                                placeholder="Search By Upcoming Dates Like DD-MM-YYY"
                                value={searchItems}
                                onChange={(e) => setSearchItems(e.target.value)}
                            />
                            <button type="submit" className="btn bg-[#219ebc] hover:bg-[#3c738f] text-white ">
                                <FaSearch />
                            </button>
                        </div>
                    </form>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-7">
                {filteredTests.length > 0
                    ? filteredTests.map((test) => <TestCard key={test._id} test={test}></TestCard>)
                    : AllTest.map((test) => <TestCard key={test._id} test={test}></TestCard>)
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
