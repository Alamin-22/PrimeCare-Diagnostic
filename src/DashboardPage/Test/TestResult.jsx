import { MdDeleteForever } from "react-icons/md";
import usePaidTest from "../../Hooks/usePaidTest";
import AxiosSecure from "../../Hooks/AxiosSecure";
import Swal from "sweetalert2";

const TestResult = () => {
    const [TestDetails, paidTestPending, refetch] = usePaidTest();
    console.log("from Result", TestDetails);

    const axiosSecure = AxiosSecure();



    const handleDeleteUser = (report) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You wont to delete this report!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/payments/${report._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Report has been deleted.",
                                icon: "success",
                            });
                            refetch();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        });
    };



    return (
        <div >
            {paidTestPending ? (
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ) : (
                <div >
                    {TestDetails.length === 0 ? (
                        <p className="flex justify-center items-center text-center h-screen text-5xl">
                            You have not received any test reports to show.
                        </p>
                    ) : (
                        <div className="overflow-x-auto h-screen">
                            {TestDetails.filter(test => test.status === "Delivered").length === 0 ? (
                                <p className="flex justify-center items-center text-red-600 text-center h-screen text-5xl">
                                    No Tests Report is Delivered found.
                                </p>
                            ) : (
                                <table className="table table-zebra">
                                    <thead className="bg-slate-200 text-sm text-gray-700">
                                        <tr>
                                            <th></th>
                                            <th>No Test</th>
                                            <th>Test Name</th>
                                            <th>Submitted Date</th>
                                            <th>Paid</th>
                                            <th>Health Condition</th>
                                            <th>Report Download Link</th>
                                            <th>Delete Report</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {TestDetails
                                            .filter(test => test.status === "Delivered")
                                            .map((report, idx) => (
                                                <tr key={idx}>
                                                    <td></td>
                                                    <th>{idx + 1}</th>
                                                    <td>{report?.title}</td>
                                                    <td>{report?.submitDate}</td>
                                                    <td>${report?.price}</td>
                                                    <td className="text-green-600">{report?.condition}</td>
                                                    <td className="text-blue-600 cursor-pointer underline">{report?.links}</td>
                                                    <td>
                                                        <button onClick={() => handleDeleteUser(report)}>
                                                            <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TestResult;
