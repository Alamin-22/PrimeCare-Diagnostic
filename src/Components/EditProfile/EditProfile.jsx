import PropTypes from 'prop-types';
import useDistricts from '../../Hooks/useDistricts';
const EditProfile = ({ userData }) => {

    const { Name, Status, District, Upazila, bloodGroup, email, photo, role, _id } = userData;

    const [Upzila, Districts] = useDistricts();
    console.log(Upzila);



    return (
        <div>
            <form className="card-body bg-emerald-50 shadow-2xl rounded-xl ">
                <h1 className="text-3xl text-center font-semibold"> Update Profile</h1>
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
                        <input type="number" name="phone" placeholder="015**********" className="input input-bordered input-accent" />
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
                                    <option value="" disabled>Select District</option>
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
                                <select name="Upazila" className="select select-accent w-full max-w-sm" defaultValue="" required>
                                    <option defaultValue={Upazila} disabled>Select Upazila</option>
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
                                    <option defaultValue="" disabled>Select Blood Group</option>
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
                                <input type="file" name="photo" className="file-input file-input-bordered file-input-accent w-full max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
EditProfile.propTypes = {
    userData: PropTypes.object,
};
export default EditProfile;



