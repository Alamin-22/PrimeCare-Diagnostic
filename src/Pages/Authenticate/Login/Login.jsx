import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logoAnimation from "../../../../public/Animation/Animation - 1700841251994.json"
import Lottie from "lottie-react";
import toast from 'react-hot-toast';
import Header from "../../../Components/HeaderFooter/Header/Header";


const Login = () => {


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        // login
        console.log(email, password)
        
    }




    return (
        <div >
            <Header></Header>
            <div className=" hero flex justify-center items-center min-h-[95vh] " style={{ backgroundImage: 'url(https://i.ibb.co/JcsjxJP/bannere3.jpg)' }}>

                <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                    <div className="hidden bg-cover lg:block lg:w-1/2"
                        style={{ backgroundImage: `url('https://i.ibb.co/X2nH1ww/login.jpg')` }}>
                    </div>
                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="">
                            <Lottie animationData={logoAnimation} className="w-60 mx-auto"></Lottie>
                        </div>

                        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                            Welcome back!
                        </p>

                        <button className="btn w-full bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">
                            <FcGoogle className="text-3xl" />
                            <span className="text-lg">Sign in with Google</span>
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                            <p className="text-xs text-center text-gray-700 uppercase dark:text-gray-400 font-medium ">or login
                                with email</p>
                            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                        </div>

                        <form onSubmit={handleLogin} >

                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                                <input id="LoggingEmailAddress" name="email" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  dark:text-gray-300 dark:border-gray-600 focus:border-[#219ebc] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#b7e3eeca]" placeholder="example@gmail.com" type="email" />
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                                    <Link className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</Link>
                                </div>

                                <input id="loggingPassword" name="password" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-[#219ebc] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-[#b7e3eeca]" placeholder="Your Password" type="password" />
                            </div>

                            <div className="mt-6">
                                <button className="w-full btn  bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">
                                    Sign In
                                </button>
                            </div>

                        </form>


                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                            <Link to={"/singUp"} className="text-sm text-gray-700 font-medium uppercase ">or <span className="text-blue-700">sign up</span></Link>

                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;