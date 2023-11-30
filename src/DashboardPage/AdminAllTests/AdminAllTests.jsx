import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import AxiosPublic from "../../Hooks/AxiosPublic";
import { Link } from "react-router-dom";
import AxiosSecure from "../../Hooks/AxiosSecure";

const AdminAllTests = () => {

    const axiosPublic = AxiosPublic();
    const axiosSecure = AxiosSecure();


    const { data: AllTest = [], refetch } = useQuery({
        queryKey: ["AllTest"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/test`);
            return res.data;
        }
    });









    const handleDeleteUser = (test) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                axiosSecure.delete(`/test/${test._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }





    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-xl bg-slate-200 text-gray-700">
                        <tr>
                            <th></th>
                            <th>Total: {AllTest.length}</th>
                            <th>Test Name</th>
                            <th>Test Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            AllTest?.map((test, idx) => <tr key={test._id}>
                                <th></th>
                                <th>{idx + 1}</th>
                                <td>
                                    {test?.title}
                                </td>
                                <td className="text-blue-500 hover:underline cursor-pointer">
                                    {test?.availableDates}
                                </td>
                                <td >

                                    <Link to={`/dashboard/UpdateTest/${test._id}`}>
                                        <FaEdit className=" text-[#219ebc]  text-2xl active:text-xl" />
                                    </Link>
                                </td>

                                <td >
                                    <button onClick={() => handleDeleteUser(test)}>
                                        <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                    </button>
                                </td>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AdminAllTests;