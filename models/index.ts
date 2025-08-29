import { AccountTypes, DateFilter } from "../contants";

export type TRootStackParamList = {
  Home: undefined;
  Login: undefined;
  Transactions: undefined;
};

export type TTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginRequest = {
    username: string;
    password: string;
}

export type TJWTDecode = {
    exp: number;
    username: string;
    id: string;
}

export type TAccountDetails = {
    id: number;
    user_id: number;
    name: AccountTypes
    balance: number
}

export type TAccountDetailsList = TAccountDetails[];

export type TCardDetails = {
    id: number;
    user_id: number;
    number: number;
    expiry: string;
    cvv: number;
}

export type TCardDetailsList = TCardDetails[]

export type TTransactionDetails = {
    id: number;
    user_id: number;
    account_id: number;
    amount: number;
    type: string;
    description: string;
    date: string;
}

export type TTransactionDetailsList = TTransactionDetails[];

export type TTransactionListAgrs = {
    limit: number;
    search?: string;
    sort?: string;
    order?: DateFilter
}

export type TTransactionListAPIAgrs ={
    queryKey: [string, number, number, string?, string?, DateFilter?]
};

export type TPaginatedResponse<T> = {
  pages: T[];
};

