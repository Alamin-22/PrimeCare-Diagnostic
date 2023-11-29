import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";

import Swal from "sweetalert2";

import AxiosPublic from "../../Hooks/AxiosPublic";

const ManageBanner = () => {

    const axiosPublic = AxiosPublic();


    const { data: banners = [], refetch } = useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/banner`);
            return res.data;
        }
    });



    const handleActive = (banner) => {
        axiosPublic.patch(`/banner/${banner._id}`, { isActive: true })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire("Activated", `Banner is now Active`, "success");
                }
            })
    }
    const handleDeActive = (banner) => {

        axiosPublic.patch(`/banner/${banner._id}`, { isActive: false })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire("Deactivated", `Banner is now DeActivated`, "success");
                }
            })
    }









    const handleDeleteUser = (banner) => {
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



                axiosPublic.delete(`/banner/${banner._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your banner has been deleted.",
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
                    <thead className="text-xl bg-slate-200 text-gray-700">
                        <tr>
                            <th></th>
                            <th>Total: {banners.length}</th>
                            <th>Banner Photo</th>
                            <th>Banner Title</th>
                            <th>Coupon Code</th>
                            <th>Discount Rate</th>
                            <th>Display</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            banners?.map((banner, idx) => <tr key={banner._id}>
                                <th></th>
                                <th>{idx + 1}</th>
                                <td>
                                    {
                                        banner?.isActive === true ?
                                            <div className="avatar online">
                                                <div className="w-40 h-20 rounded-lg">
                                                    {<img src={banner?.image} />}
                                                </div>
                                            </div>
                                            :
                                            <div className="avatar offline">
                                                <div className="w-40 h-20 rounded-lg">
                                                    {<img src={banner?.image} />}
                                                </div>
                                            </div>
                                    }
                                </td>
                                <td>
                                    {banner?.title} <br />
                                    <span className="badge badge-ghost badge-sm">{banner?.text}</span>

                                </td>
                                <td className="text-[#37b1a7] font-semibold">
                                    {banner?.couponCode}
                                </td>
                                <td className="text-red-600 font-medium">
                                    ${banner?.discountRate}
                                </td>
                                <td >
                                    {
                                        banner?.isActive === true ?
                                            <button onClick={() => handleDeActive(banner)} className="btn btn-sm btn-error btn-outline">DeActive</button>
                                            :
                                            <button onClick={() => handleActive(banner)} className="btn btn-sm btn-accent btn-outline">Active</button>
                                    }
                                </td>

                                <td >
                                    <button onClick={() => handleDeleteUser(banner)}>
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

export default ManageBanner;