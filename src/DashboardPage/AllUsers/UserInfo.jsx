import PropTypes from "prop-types";

const UserInfo = ({ user }) => {
  const {
    Name,
    Status,
    District,
    Upazila,
    bloodGroup,
    email,
    photo,
    role,
    _id,
    phone,
  } = user;

  console.log("on modal", user);

  return (
    <div className=" bg-gray-200 p-10 rounded-lg">
      <div className="text-center md:text-left ">
        <div className="md:flex justify-between  items-center">
          <div>
            <h3 className="font-medium text-3xl">User Information</h3>
            <p className="mt-4 text-lg font-medium">Id: {_id.slice(8, 16)}</p>
          </div>
          <img
            className="w-28 h-28 rounded-full mx-auto"
            src={photo}
            alt="Admin photo"
          />
        </div>
        <div>
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
                <p className="text-lg text-red-500">
                  {bloodGroup ? bloodGroup : "Add Blood Group"}
                </p>
              </div>
              <div>
                <p className="mt-4  font-medium">User Roll:</p>
                <p className="text-lg text-red-500">
                  {role ? (
                    role
                  ) : (
                    <>
                      <span className="text-gray-700">User</span>
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <p className="mt-4  font-medium">District:</p>
                <p className="text-lg ">
                  {District ? District : "Add District"}
                </p>
              </div>
              <div>
                <p className="mt-4  font-medium">Upazila:</p>
                <p className="text-lg ">{Upazila ? Upazila : "Add Upazila"}</p>
              </div>
              <div>
                <p className="mt-4  font-medium">Phone :</p>
                <p className="text-lg ">
                  {phone ? phone : "please Add Number"}
                </p>
              </div>
              <div>
                <p className="mt-4  font-medium">Status :</p>
                <p className="text-lg ">{Status ? Status : "Deactivate"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
UserInfo.propTypes = {
  user: PropTypes.object,
};
export default UserInfo;
