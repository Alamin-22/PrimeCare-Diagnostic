
const SpecialOffer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center bg-emerald-100 rounded-lg ">
                <div className="flex  px-16 py-7">
                    <img className="h-32 w-32" src="https://i.ibb.co/KsK3ycJ/stethoscope.png" alt="" />
                    <div>
                        <p className="text-2xl mt-6 mb-5 font-medium font-serif">Special Offer</p>
                        <h3 className="text-4xl font-semibold font-serif" style={{
                            backgroundImage: "linear-gradient(42deg, rgba(8,110,126,0.9556197478991597) 0%, rgba(0,212,255,1) 1%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}>
                            Get Free Medical Checkup
                        </h3>
                    </div>
                </div>
                <div>
                    <div className="relative pr-10 pb-9 md:pb-0">
                        <input type="number" className="input input-accent join-item h-16 w-80 " placeholder="Enter your phone number" />
                        <button className="btn btn-lg bg-[#219ebc] hover:bg-[#3c738f] text-white rounded-full absolute left-60 border-accent hover:border-accent ">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;