import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Header from "../../../Components/HeaderFooter/Header/Header";
import useAuth from "../../../Hooks/useAuth";
import AxiosPublic from "../../../Hooks/AxiosPublic";





const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const SignUp = () => {
    const axiosPublic = AxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const [Upzila, setUpzila] = useState([]);
    const Status = "Active";
    const { CreateUser, UpdateProfile } = useAuth();
    const navigate = useNavigate();
    const isAdmin = true;


    const Districts = useLoaderData()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const ConfirmPassword = form.get("ConfirmPassword");
        const FirstName = form.get("FirstName");
        const LastName = form.get("LastName");
        const Name = FirstName + " " + LastName;
        const District = form.get("District");
        const Upazila = form.get("Upazila");
        const bloodGroup = form.get("bloodGroup");
        const Status = form.get("Status");

        // confirm password validation
        if (password !== ConfirmPassword || !/^(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password)) {
            toast.error("Invalid password or passwords do not match.");
            return;
        }

        const formData = new FormData();
        formData.append('image', form.get("photo"));

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {

                const photo = data.data.url;
                const info = { Name, email, password, District, Upazila, bloodGroup, Status, photo };
                console.log(info);

                CreateUser(email, password)
                    .then(result => {
                        console.log(result.user);
                        UpdateProfile(Name, photo)
                            .then(() => {
                                // send to db
                                axiosPublic.post("/users", info)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            toast.success('User Successfully Created!');
                                            {
                                                isAdmin ?
                                                    navigate(location?.state ? location.state : '/dashBoard/AdminProfile')
                                                    :
                                                    navigate(location?.state ? location.state : '/dashBoard/profile');
                                            }
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            })
                    })
                    .catch(error => {
                        console.log(error);
                        const message = error.message;
                        toast.error(`Error!, ${message.slice(10, 50)}`)
                    });
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                toast.error("Error uploading image");
            });
    };


    useEffect(() => {
        fetch("/public/Data/UpaZila.json")
            .then(res => res.json())
            .then(data => {
                setUpzila(data)
            })
    }, [])




    return (
        <div>
            <Header></Header>
            <div className=" hero flex justify-center items-center min-h-[95vh] " style={{ backgroundImage: 'url(https://i.ibb.co/JcsjxJP/bannere3.jpg)' }}>
                <div className="w-full lg:w-2/3 mx-auto mt-6 mb-9">
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <form onSubmit={handleSignUp} className="card-body bg-emerald-50 shadow-2xl rounded-xl ">
                            <h1 className="text-3xl text-center font-semibold">SingUp for daily update!</h1>
                            <div className="flex gap-6">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="FirstName" placeholder="First Name" className="input input-bordered input-accent" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="LastName" placeholder="Last Name" className="input input-bordered input-accent" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="example@gmail.com" className="input input-bordered input-accent" required />
                            </div>
                            {/* password row */}
                            <div className="form-control relative">

                                <div className="flex gap-5">

                                    <div className="w-1/2">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="password"
                                                className="input input-bordered input-accent w-full"
                                                required
                                            />
                                            <span className="absolute right-5 bottom-2 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                                {showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="ConfirmPassword"
                                                placeholder="Confirm password"
                                                className="input input-bordered input-accent w-full"
                                                required
                                            />
                                            <span className="absolute right-5 bottom-2 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                                {showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />}
                                            </span>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            {/* district */}
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="form-control w-full">
                                    <div className="flex items-center gap-6 justify-between">
                                        <div>
                                            <label className="label">
                                                <span className="label-text">District</span>
                                            </label>
                                            <select name="District" className="select select-accent w-full max-w-sm" defaultValue="" required>
                                                <option value="" disabled>Select District</option>
                                                {Districts.map((district) => (
                                                    <option key={district.id} value={district.name}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Upazila</span>
                                            </label>
                                            <select name="Upazila" className="select select-accent w-full max-w-sm" defaultValue="" required>
                                                <option value="" disabled>Select Upazila</option>
                                                {Upzila.map((upzila) => (
                                                    <option key={upzila.id} value={upzila.name}>
                                                        {upzila.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="label">
                                                <span className="label-text">Blood Group</span>
                                            </label>
                                            <select name="bloodGroup" className="select select-accent w-full max-w-sm" defaultValue="" required>
                                                <option defaultValue="" disabled>Select Blood Group</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* img and status  */}
                            <div className="flex gap-3 justify-between">
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
                                <div>
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" readOnly name="Status" defaultValue={Status} className="input  input-bordered input-accent" required />
                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">Register</button>
                            </div>
                            <p className="text-center">Already have an account? <Link to={"/login"} className="font-semibold text-blue-600 underline" >LogIn</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
