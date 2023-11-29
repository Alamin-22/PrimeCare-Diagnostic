import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";
import useAuth from "./useAuth";

const useUserData = () => {


    const axiosSecure = AxiosSecure();
    const { user, loading } = useAuth();

    const { data: SingleUser = [] } = useQuery({
        queryKey: ["SingleUser", user.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            console.log(res.data)
            return res.data;
        }
    });




    return [SingleUser]
};

export default useUserData;