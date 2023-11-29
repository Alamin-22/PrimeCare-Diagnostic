import useRoll from "../../Hooks/useRoll";

const AdminProfile = () => {
    const SingleUser = useRoll();

    console.log(SingleUser[0])
    const { Name, photo } = SingleUser[0]
    return (
        <div>
            <h1 className=" text-5xl text-center">this is the container of admin profiles</h1>
            <p>{Name}</p>
            <img src={photo} alt="" />
        </div>
    );
};

export default AdminProfile;