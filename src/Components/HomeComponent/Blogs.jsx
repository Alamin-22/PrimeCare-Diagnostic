import { FaClock, FaEye, FaFacebookMessenger } from "react-icons/fa";

const Blogs = () => {
    return (
        <div>
            <div className="my-11">
                <div>
                    <h1 className="text-4xl text-center my-7 font-serif font-medium">Recent articles</h1>
                </div>

                <div className="flex flex-col md:flex-row gap-4 px-5  ">
                    {/* left side blogs */}
                    <div>
                        <div className="card w-96 mx-auto my-4  bg-slate-100 shadow-xl">
                            <div className="card-body">
                                <div className="card-actions ">
                                    <div className="badge badge-lg badge-accent badge-outline">MRI scanning</div>
                                </div>
                                <h2 className="card-title hover:underline cursor-pointer ">
                                    MRI scanning Physical activity reduces harm from tobacco and alcoholic drinks
                                </h2>
                                <div className="mt-5 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-[#219ebc] text-xl" />
                                        October 29, 2023
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEye className="text-[#219ebc] text-xl" />
                                        243
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaFacebookMessenger className="text-[#219ebc] text-xl" />
                                        1
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="card w-96 mx-auto my-4  bg-slate-100 shadow-xl">
                            <div className="card-body">
                                <div className="card-actions ">
                                    <div className="badge badge-lg badge-accent badge-outline">MRI scanning</div>
                                </div>
                                <h2 className="card-title hover:underline cursor-pointer ">
                                    MRI scanning Physical activity reduces harm from tobacco and alcoholic drinks
                                </h2>
                                <div className="mt-5 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-[#219ebc] text-xl" />
                                        November 7, 2023
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEye className="text-[#219ebc] text-xl" />
                                        243
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaFacebookMessenger className="text-[#219ebc] text-xl" />
                                        1
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* right side slider */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        <div className="relative grid h-[35rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/Qcdb6P4/doctorblog.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>

                            <div className="relative text-white text-left p-6 px-6 pb-10 pt-1 md:px-12">
                                <div className=" absolute -top-96">
                                    <div className="px-5 py-1  rounded-full text-xl bg-[#219ebc]  text-white">Cardiology</div>
                                </div>
                                <h2 className="text-2xl hover:underline cursor-pointer">
                                    The best recreation areas for general immunity
                                </h2>
                                <div className="mt-5 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-[#219ebc] text-xl" />
                                        October 15, 2023
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEye className="text-[#219ebc] text-xl" />
                                        243
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaFacebookMessenger className="text-[#219ebc] text-xl" />
                                        1
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative grid h-[35rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/tJwj58F/surgury.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                            </div>

                            <div className="relative text-white text-left p-6 px-6 pb-10 pt-1 md:px-12">
                                <div className=" absolute -top-96">
                                    <div className="px-5 py-1  rounded-full text-xl bg-[#219ebc]  text-white">Cardiology</div>
                                </div>
                                <h2 className="text-2xl hover:underline cursor-pointer">
                                The Journey Through Surgery and Recovery
                                </h2>
                                <div className="mt-5 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-[#219ebc] text-xl" />
                                        November 25, 2023
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaEye className="text-[#219ebc] text-xl" />
                                        300
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaFacebookMessenger className="text-[#219ebc] text-xl" />
                                        6
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;