import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";
import useAuth from "./useAuth";

const usePaidTest = () => {

    const axiosSecure = AxiosSecure();
    const { user } = useAuth();

    const { data: TestDetails = [], isPending: paidTestPending, refetch } = useQuery({
        queryKey: ["paidTest"],
        queryFn: async () => {
            const res = await axiosSecure.get(`payments/${user?.email}`)
            console.log(res.data)
            return res.data;
        }
    })

    return [TestDetails, paidTestPending, refetch]
};

export default usePaidTest;

