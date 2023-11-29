import useUserData from "../../Hooks/useUserData";


const Profile = () => {
    const [SingleUser] = useUserData();

    // Check if SingleUser has data
    const userData = SingleUser[0];

    if (!userData) {
        // Handle loading state or render an error message
        return (
            <div>
                <div className="flex flex-col gap-4 w-full h-full">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        );
    }

    // Destructure data
    const { Name, Status, District, Upazila, bloodGroup, email, photo, role, _id } = userData;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 p-10 gap-10">
                <div className="lg:col-span-2 mx-auto md:mx-0 text-center p-10 md:text-left bg-gray-200 rounded-lg  ">

                    <img className="w-48 h-48 rounded-full"
                        src={photo} alt="Admin photo" />
                    <p className="mt-3 text-sm">Welcome Back</p>
                    <h3 className="font-medium text-xl mt-4">{Name}</h3>
                    <p className="mt-3 font-semibold">Roll: <span className="uppercase">{role ? role : "User"}</span> </p>
                    <p className="mt-3 font-semibold">Status: <span className="uppercase">{Status}</span> </p>

                </div>
                <div className="lg:col-span-5 bg-gray-200 p-10 rounded-lg">
                    <div className="text-center md:text-left ">
                        <h3 className="font-medium text-3xl">User Information</h3>
                        <div >
                            <p className="mt-4 text-lg font-medium">Id: User_{_id.slice(0, 4)}</p>
                            <div className="md:flex gap-10">
                                <div>
                                    <div>
                                        <p className="mt-4  font-medium">Full Name:</p>
                                        <p className="text-lg ">{Name}</p>
                                    </div>
                                    <div>
                                        <p className="mt-4  font-medium">Email:</p>
                                        <p className="text-lg">{email}</p>
                                    </div>
                                    <div>
                                        <p className="mt-4  font-medium">Blood Group:</p>
                                        <p className="text-lg text-red-500">{bloodGroup}</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="mt-4  font-medium">District:</p>
                                        <p className="text-lg ">{District}</p>
                                    </div>
                                    <div>
                                        <p className="mt-4  font-medium">Upazila:</p>
                                        <p className="text-lg ">{Upazila}</p>
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

export default Profile;


