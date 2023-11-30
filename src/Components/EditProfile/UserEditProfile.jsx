import PropTypes from 'prop-types';


import toast from 'react-hot-toast';
import useDistricts from '../../Hooks/useDistricts';
import AxiosSecure from '../../Hooks/AxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`



const UserEditProfile = ({ userData }) => {

    const { Name, District, Upazila, bloodGroup, _id, } = userData;
    const [Upzila, Districts] = useDistricts();
    const axiosSecure = AxiosSecure();

    const HandleEdit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Name = form.get("FullName");
        const District = form.get("District");
        const Upazila = form.get("Upazila");
        const bloodGroup = form.get("bloodGroup");
        const phone = form.get("phone");

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
                const UpdateUser = {
                    Name: Name,
                    District: District,
                    Upazila: Upazila,
                    bloodGroup: bloodGroup,
                    photo: photo,
                    phone: phone,

                };
                console.log(UpdateUser);
                // send data to the server;
                axiosSecure.patch(`/users/edit/${_id}`, UpdateUser)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            toast.success(`${Name} Successfully Updated!`)
                            console.log(res.data);
                            window.location.reload();
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }

    return (
        <div>
            <form onSubmit={HandleEdit} className="card-body bg-emerald-50 shadow-2xl rounded-xl ">
                <h1 className="text-3xl text-center font-semibold"> Update Profile</h1>
                <p className="mt-4 text-lg text-center font-medium">User ID: Admin_{_id.slice(0, 4)}</p>
                <div className="flex gap-6">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="FullName" placeholder="Full Name" className="input input-bordered input-accent" required defaultValue={Name} />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" name="phone" placeholder="015756134234" className="input input-bordered input-accent" />
                    </div>
                </div>
                {/* district */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="form-control w-full">
                        <div className="flex items-center gap-6 justify-between">
                            <div>
                                <label className="label">
                                    <span className="label-text">District</span>
                                </label>
                                <select name="District" className="select select-accent w-full max-w-sm" defaultValue={District} required>
                                    <option defaultValue={District} disabled>Select Blood Group</option>
                                    {Districts.map((district) => (
                                        <option key={district.id} value={district.name}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Upazila</span>
                                </label>
                                <select name="Upazila" className="select select-accent w-full max-w-sm" defaultValue={Upazila} required>
                                    <option defaultValue={Upazila} disabled>Select Blood Group</option>
                                    {Upzila.map((upzila) => (
                                        <option key={upzila.id} value={upzila.name}>
                                            {upzila.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <select name="bloodGroup" className="select select-accent w-full max-w-sm" defaultValue={bloodGroup} required>
                                    <option defaultValue={bloodGroup} disabled>Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                {/* img and status  */}
                <div className="flex gap-3 justify-between">
                    <div className="form-control">
                        <div className="flex items-center justify-between">
                            <div>
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xl" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-[#219ebc] hover:bg-[#3c738f] border-none text-white">Edit User</button>
                </div>
            </form>
        </div>
    );
};
UserEditProfile.propTypes = {
    userData: PropTypes.object,
};
export default UserEditProfile;



