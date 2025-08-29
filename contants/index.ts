export enum AccountTypes {
    Checking =  "Checking",
    Savings = "Savings"
}

export enum DateFilter {
    desc = "desc",
    asc = "asc"
}

export const DATE_FILTER_TEXT = {
    [DateFilter.desc] : "Descending",
    [DateFilter.asc] : "Ascending",
}