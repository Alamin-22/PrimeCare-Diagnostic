import usePaidTest from "../../Hooks/usePaidTest";
import Swal from "sweetalert2";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { MdCancel } from "react-icons/md";
const UpComingAppointments = () => {

    const [TestDetails, paidTestPending, refetch] = usePaidTest();
    const axiosSecure = AxiosSecure();


    console.log("checking for ", TestDetails,)

    const handleCancelBooking = (test) => {
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
                const cancelBooking = "cancel"
                axiosSecure.patch(`/payments/${test._id}`, { cancelBooking })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Booking has been Canceled.",
                                icon: "success"
                            });
                            refetch();
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
            {
                paidTestPending ?
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
                        <div>
                            {
                                TestDetails.length === 0 ?
                                    <>
                                        <p className="flex justify-center items-center text-center h-screen text-5xl">
                                            You have not booked any test to show upcoming test.
                                        </p>
                                    </>
                                    :
                                    <>
                                        <div className="overflow-x-auto">
                                            <table className="table table-zebra">
                                                {/* head */}
                                                <thead className="bg-slate-200 text-gray-700">
                                                    <tr>
                                                        <th></th>
                                                        <th>No Test</th>
                                                        <th>Photo</th>
                                                        <th>Title</th>
                                                        <th>Reservation Date</th>
                                                        <th>Reservation Time</th>
                                                        <th>Paid</th>
                                                        <th>Trx Id</th>
                                                        <th>Cancel Booking</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        TestDetails?.map((test, idx) => <tr key={idx}>
                                                            <td></td>
                                                            <th>{idx + 1}</th>
                                                            <td>
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        {
                                                                            test?.image ?
                                                                                <img src={test?.image} />
                                                                                :
                                                                                <img src={"https://i.ibb.co/QjHGKjw/user.png"} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {test?.title}
                                                            </td>
                                                            <td >
                                                                {test?.availableDates}
                                                            </td>
                                                            <td >
                                                                {test?.time}
                                                            </td>
                                                            <td >
                                                                ${test?.price}
                                                            </td>
                                                            <td className="text-green-600">
                                                                {test?.trxId}
                                                            </td>
                                                            <td >
                                                                {
                                                                    test.status === "pending" ?
                                                                        <MdCancel onClick={() => handleCancelBooking(test)} className="text-3xl cursor-pointer text-red-500 " />
                                                                        :
                                                                        <>
                                                                            <p className="badge badge-outline badge-error">Canceled</p>
                                                                        </>
                                                                }
                                                            </td>
                                                        </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                            }

                        </div>
                    </>
            }
        </div>
    );
};

export default UpComingAppointments;

