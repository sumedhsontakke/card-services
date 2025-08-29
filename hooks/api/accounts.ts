
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "../../config/adaptor";
import { TAccountDetailsList } from "../../models";

export const getAccountsList = async () => {
    try {
        const response = await axios.get("/accounts");
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const useAccountDetails = (): UseQueryResult<TAccountDetailsList, Error> => {
    return useQuery<TAccountDetailsList, Error>({
        queryKey: ["accountDetails"],
        queryFn: getAccountsList
    })
}