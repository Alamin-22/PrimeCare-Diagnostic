import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "./AxiosPublic";
import useAuth from "./useAuth";

const useRoll = () => {


    const axiosPublic = AxiosPublic();
    const { user, loading } = useAuth();

    const { data: role = [] } = useQuery({
        queryKey: ["role", user.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user.email}`);
            return res.data;
        }
    });




    return [role]
};

export default useRoll;