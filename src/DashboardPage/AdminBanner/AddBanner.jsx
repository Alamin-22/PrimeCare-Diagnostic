import toast from "react-hot-toast";
import AxiosPublic from "../../Hooks/AxiosPublic";
import { useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddBanner = () => {
    const navigate = useNavigate();

    const axiosPublic = AxiosPublic();


    const HandleAddBanner = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const text = form.get("text");
        const discountRate = form.get("discountRate");
        const couponCodeLower = form.get("couponCode");
        const couponCode = couponCodeLower.toUpperCase();
        const isActive = false;
        const formData = new FormData();
        formData.append('image', form.get("photo"));

        fetch(image_hosting_api, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data.data.url)
                const photo = data.data.url;
                const NewBanner = {
                    title: title,
                    image: photo,
                    text: text,
                    couponCode: couponCode,
                    discountRate: discountRate,
                    isActive: isActive,
                };
                console.log(NewBanner);
                // send data to the server;
                axiosPublic.post("/banner", NewBanner)
                    .then(res => {
                        toast.success('Banner Successfully Added!')
                        console.log(res.data);
                        navigate("/dashboard/manageBanner")

                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }
    return (
        <div>
            <div className="max-w-4xl mx-auto shadow-2xl">
                <form onSubmit={HandleAddBanner} className=" bg-[#a6faf02d] " >
                    <div className="p-3 ">
                        <h1 className="text-3xl text-center font-bold">Banner Form</h1>
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Title of the Banner</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" placeholder="Title of the Test" className="input input-bordered input-accent w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Short Slogan For Banner</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="text" placeholder="Slogan will be within 10 words " className="input input-bordered input-accent w-full" required />
                                </label>
                            </div>
                        </div>

                        <div className="md:flex justify-between mb-8">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Discount Price For Test</span>
                                </label>
                                <label className="input-group">
                                    <input className="input-accent input input-bordered w-full" required
                                        type="number"
                                        name="discountRate"
                                        placeholder="30"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Coupon Code</span>
                                </label>
                                <label className="input-group">
                                    <input className="input input-accent input-bordered w-full" required
                                        type="text"
                                        name="couponCode"
                                        placeholder="CHECKUP20"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex md:flex mb-8 justify-between gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Display</span>
                                </label>
                                <label className="input-group">
                                    <input className="input input-accent input-bordered w-full" required
                                        type="text"
                                        name="isActive"
                                        defaultValue={"False"}
                                        readOnly
                                    />
                                </label>
                            </div>

                            <div className="form-control">
                                <div className="flex items-center justify-between">
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xl" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Post Test" className="btn btn-accent my-3 btn-block " />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBanner;