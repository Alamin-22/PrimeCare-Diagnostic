import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Payment from "./Payments/Payment";

const TestDetails = () => {
    const [specificTest] = useLoaderData();
    const { _id, title, featured, shortDescription, discountRate, description, image, time, price, availableSlot, couponCode, availableDates, } = specificTest;

    // const [slot, setSlot] = useState(availableSlot - 1);
    const [isApplicationOpen, setApplicationOpen] = useState(false);


    const handleBookNow = () => {
        if (!availableSlot > 0) {
            toast.error("Sorry There are no slot available for this test.")
            return
        } else {
            console.log("yea i can book this test")
            // setSlot(slot => slot - 1);
            setApplicationOpen(true);
        }
    };





    return (
        <div>
            <div className="max-w-2xl px-8 mx-auto py-4 bg-white rounded-lg shadow-md ">
                <figure className="relative" >
                    {
                        featured === true &&
                        <div className="absolute right-0 top-0 mr-3 mt-3 px-5 py-0  rounded-full text-xl bg-[#f53f3f]  text-white">Featured</div>
                    }
                    <img src={image} alt="job Related banner" className=" mx-auto" />
                </figure>
                <div className="mt-7">

                    <div>
                        <p className="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline cursor-pointer" tabIndex="0" role="link"> {title}</p>
                        <p className="mt-2 text-base text-gray-600 ">
                            {shortDescription}</p>
                    </div>

                </div>

                <div className="mt-2">
                    <p className="text-xl font-bold text-gray-700  hover:text-gray-600  cursor-pointer hover:underline" tabIndex="0" role="link">
                        Description
                    </p>
                    {description}
                </div>
                <div className="mt-5">
                    <p className="text-lg  text-gray-700  hover:text-gray-600 ">Reservation Time: {time}</p>
                    <p className="text-lg  text-gray-700  hover:text-gray-600 ">Reservation Date: {availableDates}</p>

                </div>
                <div className="mt-1  ">
                    <div>
                        <p className="text-lg  text-gray-700  hover:text-gray-600 ">Reservation price: $ {price}</p>
                        <p className="text-lg  text-gray-700  hover:text-gray-600 ">Available Slot: {availableSlot}</p>
                    </div>
                    {/* The button to open modal */}
                    <button className="btn bg-[#219ebc] hover:bg-[#3c738f] text-white mt-1 w-full" onClick={handleBookNow}>
                        Book Now
                    </button>
                    {isApplicationOpen && (
                        <dialog id="my_modal_3" className="modal" open>
                            <div className="modal-box">
                                <form method="dialog">
                                    <button
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                        onClick={() => setApplicationOpen(false)}
                                    >
                                        ✕
                                    </button>
                                </form>
                                <Payment specificTest={specificTest} discountRate={discountRate} couponCode={couponCode} _id={_id} price={price}></Payment>

                            </div>
                        </dialog>
                    )}


                </div>
            </div>

        </div>
    );
};

export default TestDetails;
