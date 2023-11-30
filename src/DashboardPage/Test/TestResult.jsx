import usePaidTest from "../../Hooks/usePaidTest";

const TestResult = () => {
    const [TestDetails, paidTestPending] = usePaidTest();
    console.log("from Result", TestDetails);

    return (
        <div className="h-screen">
            {paidTestPending ? (
                <div className="flex flex-col gap-4 w-full">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            ) : (
                <div>
                    {TestDetails.length === 0 ? (
                        <p className="flex justify-center items-center text-center h-screen text-5xl">
                            You have not received any test reports to show.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            {TestDetails.filter(test => test.status === "Delivered").length === 0 ? (
                                <p className="flex justify-center items-center text-red-600 text-center h-screen text-5xl">
                                    No tests with status Delivered found.
                                </p>
                            ) : (
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead className="bg-slate-200 text-sm text-gray-700">
                                        <tr>
                                            <th></th>
                                            <th>No Test</th>
                                            <th>Test Name</th>
                                            <th>Submitted Date</th>
                                            <th>Reservation Time</th>
                                            <th>Paid</th>
                                            <th>Trx Id</th>
                                            <th>Cancel Booking</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TestDetails
                                            .filter(test => test.status === "Delivered")
                                            .map((test, idx) => (
                                                <tr key={idx}>
                                                    <td></td>
                                                    <th>{idx + 1}</th>
                                                    <td>{test?.title}</td>
                                                    <td>{test?.availableDates}</td>
                                                    <td>{test?.time}</td>
                                                    <td>${test?.price}</td>
                                                    <td className="text-green-600">{test?.trxId}</td>
                                                    <td>
                                                        {test.status === "pending" ? (
                                                            <p className="badge badge-outline badge-error">
                                                                Canceled
                                                            </p>
                                                        ) : (
                                                            <>
                                                                <p className="badge badge-outline badge-error">
                                                                    Canceled
                                                                </p>
                                                            </>
                                                        )}
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
