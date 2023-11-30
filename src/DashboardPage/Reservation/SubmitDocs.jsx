import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import AxiosSecure from "../../Hooks/AxiosSecure";

// eslint-disable-next-line react/prop-types
const SubmitDocs = ({ email, _id, refetch }) => {

    const axiosSecure = AxiosSecure();
    const [date, setDate] = useState(new Date());


    const HandlePostResult = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const submitDate = form.get("submitDate");
        const condition = form.get("condition");
        const links = form.get("links");
        const status = "Delivered";
        const SubmitData = {
            submitDate,
            condition,
            links,
            status,
        };
        console.log(SubmitData);
        // send data to the server;
        axiosSecure.patch(`/payments/${_id}`, SubmitData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success('Test Result Submitted')
                    refetch();
                }
            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <div>
            <div className="max-w-4xl  mx-auto shadow-2xl">
                <form onSubmit={HandlePostResult} className=" bg-[#a6faf02d] " >
                    <div className="p-3 ">
                        <h1 className="text-3xl text-center font-bold"> Test Report Form of <br />
                            <span className="text-lg"> {email}</span>
                        </h1>
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Patient Condition</span>
                                </label>
                                <select name="condition" className="select select-accent w-full max-w-sm" defaultValue="" required>
                                    <option defaultValue="" disabled>Select Condition</option>
                                    <option value="Good">Good</option>
                                    <option value="VeryGood">Very Good</option>
                                    <option value="Bad">Bad</option>
                                    <option value="VeryBad">Very Bad</option>
                                    <option value="Average">Average</option>
                                </select>
                            </div>
                            <div className="form-control w-1/2 mr-2">
                                <label className="label">
                                    <span className="label-text">Submit Date</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker name="submitDate" className="input input-accent cursor-pointer input-bordered "
                                        placeholderText="MM/DD/YYYY" selected={date} onChange={(date) => setDate(date)}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="form-control  ">
                                <label className="label">
                                    <span className="label-text">PDF or Docs Link</span>
                                </label>
                                <label className="input-group">
                                    <input className="input-accent input input-bordered w-full" required
                                        type="text"
                                        name="links"
                                        placeholder="Report Link will be added"
                                    />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Submit Report" className="btn btn-accent my-3 btn-block " />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitDocs;