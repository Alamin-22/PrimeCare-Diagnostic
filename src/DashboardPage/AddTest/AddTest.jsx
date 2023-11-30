import { useState } from "react";
import AxiosPublic from "../../Hooks/AxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddTest = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const axiosPublic = AxiosPublic();


    const HandleAddTest = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const Date = form.get("testDate");
        const time = form.get("time");
        const price = form.get("price");
        const ShortDescription = form.get("ShortDescription");
        const JobDetails = form.get("JobDetails");
        const availableSlot = form.get("availableSlot");
        const featured_bol = form.get("featured_bol");
        const formData = new FormData();
        formData.append('image', form.get("photo"));

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data.data.url)
                const photo = data.data.url;
                const NewTest = {
                    title: title,
                    shortDescription: ShortDescription,
                    description: JobDetails,
                    image: photo,
                    availableDates: Date,
                    time: time,
                    price: parseFloat(price),
                    availableSlot: parseFloat(availableSlot),
                    featured: JSON.parse(featured_bol),
                };
                console.log(NewTest);
                // send data to the server;
                axiosPublic.post("/test", NewTest)
                    .then(res => {
                        toast.success('Test Successfully Added!')
                        console.log(res.data);
                        navigate("/dashboard/observeAllTest")
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }
    return (
        <div>
            <div className="max-w-4xl mx-auto shadow-2xl">
                <form onSubmit={HandleAddTest} className=" bg-[#a6faf02d] " >
                    <div className="p-3 ">
                        <h1 className="text-3xl text-center font-bold">Test Description Form</h1>
                        {/*Title and Category */}
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Title of the Test</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" placeholder="Title of the Test" className="input input-bordered input-accent w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Featured</span>
                                </label>
                                <label className="input-group">
                                    <select name="featured_bol" className="select select-accent select-bordered w-full" required>
                                        <option value="false">False</option>
                                        <option value="true">True</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        {/* form Date row */}

                        <div className="flex md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="time" defaultValue={"09:00 AM - 10:00 AM"} placeholder="09:00 AM - 10:00 AM" className="input input-bordered w-full input-accent" required />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Test Date</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker name="testDate" className="input input-accent cursor-pointer input-bordered w-[95%] md:w-[364px] lg:w-[428px]"
                                        placeholderText="MM/DD/YYYY" selected={date} onChange={(date) => setDate(date)}
                                    />
                                </label>
                            </div>
                        </div>
                        {/* form time row */}
                        <div className="md:flex justify-between mb-8">
                            <div className="form-control">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xl" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control md:w-1/3 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Price For Test</span>
                                </label>
                                <label className="input-group">
                                    <input className="input-accent input input-bordered w-full" required
                                        type="number"
                                        name="price"
                                        placeholder="150"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Available Slot</span>
                                </label>
                                <label className="input-group">
                                    <input className="input input-accent input-bordered w-full" required
                                        type="number"
                                        name="availableSlot"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Short Description For Display</span>
                            </label>
                            <label className="input-group">
                                <textarea className=" textarea-accent textarea textarea-bordered w-full h-24" name="ShortDescription" required placeholder="Write Short Description Within 10 words For Card........"></textarea>
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Detail Description About Test</span>
                            </label>
                            <label className="input-group">
                                <textarea className=" textarea-accent textarea textarea-bordered w-full h-64" name="JobDetails" required placeholder="Write Test Description........"></textarea>
                            </label>
                        </div>
                        <input type="submit" value="Post Test" className="btn btn-accent my-3 btn-block " />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTest;