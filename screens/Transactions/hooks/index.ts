import { useState } from "react";
import { useTransactionsList } from "../../../hooks/api/transactions";
import { DateFilter } from "../../../contants";
import { ORDER_BY, SORT_BY } from "../constants";

export const useTransactions = () => {
    const [searchField, setSearchField] = useState("");
    const [search, setSearch] = useState("");
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [openOderByValue, setOpenOrderByValue] = useState(ORDER_BY[0].value);
    const [sortByValue, setSortByValue] = useState(SORT_BY[0].value);

    const { data, isLoading, isRefetching, error, hasNextPage, refetch, fetchNextPage } = useTransactionsList({
        search: search,
        sort: sortByValue,
        order: openOderByValue as DateFilter,
        limit: 10
    });

    const onRefresh = () => {
        refetch();
    }

    const handleInputChange = (value: string) => {
        setSearchField(value)
    }

    const handleInputSubmit = (value: string) => {
        setSearch(value);
    }

    const clearTextField = () => {
        setSearchField("");
        setSearch("");
    }

    const handlShowOptions = () => {
        setShowMoreOptions(!showMoreOptions);
    }

    return {
        data,
        isLoading,
        isRefetching,
        error,
        searchField,
        hasNextPage,
        showMoreOptions,
        openOderByValue,
        sortByValue,
        onRefresh,
        handleInputChange,
        handleInputSubmit,
        fetchNextPage,
        clearTextField,
        handlShowOptions,
        setOpenOrderByValue,
        setSortByValue
    }
}