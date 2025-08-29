import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "../../config/adaptor";
import { TCardDetailsList } from "../../models";

export const getCardsList = async () => {
    try {
        const response = await axios.get("/cards");
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const useCardsList = (): UseQueryResult<TCardDetailsList, Error> => {
    return useQuery<TCardDetailsList, Error>({
        queryKey: ["cards"],
        queryFn: getCardsList
    })
}