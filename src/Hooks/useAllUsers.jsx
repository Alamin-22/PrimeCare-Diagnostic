import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";

const useAllUsers = () => {
    const axiosSecure = AxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });
    return [users, refetch]
};

export default useAllUsers;