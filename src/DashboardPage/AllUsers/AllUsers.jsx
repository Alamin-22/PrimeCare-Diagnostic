import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../../Hooks/AxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUsers = () => {
    const axiosSecure = AxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }





    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="bg-slate-200 text-gray-700">
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Info</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            {
                                                user?.photo ?
                                                    <img src={user?.photo} />
                                                    :
                                                    <img src={"https://i.ibb.co/QjHGKjw/user.png"} />
                                            }
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.Name}
                                </td>
                                <td className="text-blue-500 hover:underline cursor-pointer">
                                    {user?.email}
                                </td>
                                <td >
                                    <button >
                                        <FaInfoCircle className=" text-amber-500 text-2xl active:text-xl" />
                                    </button>
                                </td>
                                <td >
                                    active
                                </td>
                                <td >
                                    User
                                </td>
                                <td >
                                    <button onClick={() => handleDeleteUser(user)}>
                                        <MdDeleteForever className=" text-red-600 text-3xl active:text-2xl" />
                                    </button>
                                </td>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;