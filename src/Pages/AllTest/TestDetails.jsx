import { useLoaderData } from "react-router-dom";

const TestDetails = () => {
    const [specificTest] = useLoaderData();
    const { title, featured, shortDescription, description, image, time, price, availableSlot, availableDates, } = specificTest;

    return (
        <div className=" hero flex justify-center items-center min-h-[95vh] " style={{ backgroundImage: 'url(https://i.ibb.co/JcsjxJP/bannere3.jpg)' }}>
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
                    <button className="btn bg-[#219ebc] hover:bg-[#3c738f] text-white mt-1 w-full">
                        Book Now
                    </button>


                </div>
            </div>

        </div>
    );
};

export default TestDetails;
