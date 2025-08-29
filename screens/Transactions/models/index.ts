import { TTransactionDetails } from "../../../models";

export type TTransactionProp = {
    item: TTransactionDetails
};

export type TFilterProps = {
    openOderByValue: string;
    sortByValue: string
    setOpenOrderByValue: (value: unknown) => void
    setSortByValue: (value: unknown) => void
};