
import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { SlDocs } from "react-icons/sl";
import SubmitDocs from "./SubmitDocs";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Reservation = () => {

    const axiosSecure = AxiosSecure();
    const [search, setSearch] = useState("");


    const { data: reservations = [], isPending: reservationPending, refetch } = useQuery({
        queryKey: ["reservations",],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?search=${search}`);
            return res.data;
        }
    });

    
    
    const handleSearch = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        setSearch(email)
        // eslint-disable-next-line no-unused-vars
        const res = await axiosSecure.get(`/payments?search=${email}`);
        refetch();
    };
    
    const handleCancelBooking = (reserved) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this reservation",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const cancelBooking = "cancel";
                axiosSecure
                    .patch(`/payments/${reserved._id}`, { cancelBooking })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            axiosSecure
                                .delete(`/payments/${reserved._id}`)
                                .then((res) => {
                                    console.log(res.data);
                                    if (res.data.deletedCount) {
                                        refetch();
                                        Swal.fire({
                                            title: "Canceled!",
                                            text: `Booking for ${reserved?.title} has been Canceled.`,
                                            icon: "success",
                                        });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                });


                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };




    return (
        <div className="">
            {
                reservationPending ?
                    <>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </>
                    :
                    <>
                        <div className="overflow-x-auto ">
                            <div>
                                <div>
                                    <form onSubmit={handleSearch} className="my-5">
                                        <div className="flex md:w-full flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:space-x-0 md:flex-row md:justify-center">
                                            <input
                                                type="text"
                                                className="md:w-3/4 input input-accent"
                                                placeholder="Search user Email"
                                                name="email"
                                            />
                                            <button type="submit" className="btn bg-[#219ebc] hover:bg-[#3c738f] text-white ">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                            <table className="table table-zebra">
                                <thead className="bg-slate-200 text-gray-700">
                                    <tr>
                                        <th></th>
                                        <th>No</th>
                                        <th>Test Title</th>
                                        <th>Email</th>
                                        <th>Trx Id</th>
                                        <th>Status</th>
                                        <th>Submit</th>
                                        <th>Cancel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations?.map((reserved, idx) => (
                                        <tr key={reserved._id}>
                                            <td></td>
                                            <th>{idx + 1}</th>
                                            <td>{reserved?.title}</td>
                                            <td className="text-blue-500 hover:underline cursor-pointer">
                                                {reserved?.email}
                                            </td>

                                            <td>
                                                {reserved.trxId}
                                            </td>


                                            <td>
                                                {
                                                    reserved?.status === "pending" ?
                                                        <>
                                                            <p className="text-sm font-semibold text-cyan-600">
                                                                Pending
                                                            </p>
                                                        </>
                                                        :
                                                        <>
                                                            {
                                                                reserved?.status === "cancel" ?
                                                                    <>
                                                                        <p className="text-sm font-semibold text-yellow-600">Canceled</p>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <p className="text-sm font-semibold text-green-600">Delivered</p>
                                                                    </>
                                                            }
                                                        </>
                                                }
                                            </td>
                                            <td>
                                                <SlDocs
                                                    onClick={() =>
                                                        document
                                                            .getElementById(`my_modal_${reserved._id}`)
                                                            .showModal()
                                                    }
                                                    className="text-emerald-600 text-2xl cursor-pointer active:text-xl"
                                                />
                                                <dialog id={`my_modal_${reserved._id}`} className="modal">
                                                    <div className="modal-box ">
                                                        <form method="dialog">
                                                            {/* if there is a button in form, it will close the modal */}
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                                ✕
                                                            </button>
                                                        </form>
                                                        <SubmitDocs refetch={refetch} _id={reserved?._id} email={reserved?.email} ></SubmitDocs>
                                                    </div>
                                                </dialog>
                                            </td>
                                            <td>
                                                <button onClick={() => handleCancelBooking(reserved)}>
                                                    <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    );
};

export default Reservation;



