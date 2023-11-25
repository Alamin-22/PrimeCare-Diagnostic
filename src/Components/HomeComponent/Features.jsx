import Lottie from "lottie-react";
import docAnimation from "../../../public/Animation/Animation - 1700945746684.json"
const Features = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl my-5 text-gray-800  font-semibold">Comprehensive Healthcare Solutions</h1>
                <p className="max-w-3xl text-center text-gray-600 font-medium mx-auto">Your journey to well-being starts here, with a diverse range of specialized services. Our commitment is to provide personalized and exceptional care for every aspect of your health</p>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="max-w-xs  mx-auto mb-10 border p-6 bg-emerald-50" >
                        <Lottie animationData={docAnimation} className=" h-96"></Lottie>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-7 rounded-lg bg-slate-200 ">
                        <div className="max-w-md border p-7 bg-slate-50  cursor-pointer rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/cDLfvjh/stomach.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5 ">Gastroenterology</h6>

                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/fYfTqCS/heart.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Cardiology</h6>

                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/ynGvqyR/joints.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Orthopedic</h6>

                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/nkfnGqq/blood-tube.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Blood test</h6>
                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/5jZXSGy/mri.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">MRI Testing</h6>
                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/M1qrjRS/scissors.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Surgery</h6>
                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/fSj05Cv/brain.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Neurosurgery</h6>
                        </div>
                        <div className="max-w-md border p-7 bg-slate-50 rounded-lg">
                            <div className="flex mx-auto items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                <img src="https://i.ibb.co/RDjkXxg/kidneys.png" alt="" />
                            </div>
                            <h6 className="mb-2 text-center font-semibold leading-5">Urology</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;


