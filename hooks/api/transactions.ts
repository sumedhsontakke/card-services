import { QueryFunctionContext, useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query";
import axios from "../../config/adaptor";
import { TPaginatedResponse, TTransactionDetailsList, TTransactionListAgrs } from "../../models";


export const getTransactionList = async ({
    pageParam = 1,
    queryKey,
}: QueryFunctionContext<[string, { search?: string; sort?: string; order?: string; limit?: number }]>): Promise<TTransactionDetailsList> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_key, { search, sort, order, limit }] = queryKey;

    const params = new URLSearchParams();
    params.set("page", String(pageParam));
    params.set("limit", String(limit || 10));
    if (search) params.set("search", search);
    if (sort) params.set("sort", sort);
    if (order) params.set("order", order);

    if (sort)
        params.set('sort', `${sort}`);

    try {
        const response = await axios.get("/transactions", {
            params,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const useTransactionsList = ({
    search,
    sort,
    order,
    limit
}: TTransactionListAgrs): UseInfiniteQueryResult<TPaginatedResponse<TTransactionDetailsList>, Error> => {
  return useInfiniteQuery<TTransactionDetailsList, Error>({
    queryKey: ["transactions", { search, sort, order, limit }],
    queryFn: getTransactionList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined;
      return allPages.length + 1; 
    },
  });
}