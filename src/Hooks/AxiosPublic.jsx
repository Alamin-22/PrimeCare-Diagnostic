import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://b8a12-server-side-alamin-22.vercel.app",
    withCredentials: true,
})


const AxiosPublic = () => {
    return axiosPublic;
};

export default AxiosPublic;