
const Support = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly space-y-3 my-5 gap-5 px-5 items-center ">
            <div className="w-80 border-b-4 border-[#219ebc] bg-slate-100 rounded-lg p-7">
                <div className="flex justify-between mb-3 ">
                    <h1 className="text-xl text-gray-700 font-mono font-semibold">BEST CHECKUP</h1>
                    <p className="text-xl text-[#219ebc] font-extrabold">01</p>
                </div>
                <p className="text-gray-500 font-medium">
                    A comprehensive assessment of your overall health, including vital signs, blood tests, and lifestyle consultation.
                </p>
            </div>
            <div className="w-80 border-b-4 bg-slate-100 border-[#219ebc] rounded-lg p-6">
                <div className="flex justify-between mb-3 ">
                    <h1 className="text-lg text-gray-700 font-mono font-semibold">ONLINE APPOINTMENT</h1>
                    <p className="text-xl text-[#219ebc] font-extrabold">02</p>
                </div>
                <p className="text-gray-500 font-medium">
                    Book appointments online, pick your time, and get instant confirmation. Your schedule, your well-being – prioritize health with ease!
                </p>
            </div>
            <div className="w-80 border-b-4 bg-slate-100 border-[#219ebc] rounded-lg p-7">
                <div className="flex justify-between mb-3 ">
                    <h1 className="text-lg text-gray-700 font-mono font-semibold">24 X 7 AVAILABLE</h1>
                    <p className="text-xl text-[#219ebc] font-extrabold">03</p>
                </div>
                <p className="text-gray-500 font-medium">
                    Access our services 24/7 for convenient healthcare solutions. Your health, your time – prioritize wellness on your terms.
                </p>
            </div>

        </div>
    );
};

export default Support;