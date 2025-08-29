import { TAccountDetailsList, TCardDetailsList } from "../../../models"

        
export type TAccountsProps = {
    accountDetails?: TAccountDetailsList
    isAccountDetailsLoading: boolean
    error: Error | null
}

export type TCardsProps = {
    cardDetailsList?: TCardDetailsList;
    isCardDetailsLoading?: boolean;
}