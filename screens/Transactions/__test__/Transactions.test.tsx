
import { fireEvent, render, screen } from "@testing-library/react-native";
import { useTransactionsList } from "../../../hooks/api/transactions";
import Transactions from "../Transactions";

jest.mock("react-native-dropdown-picker", () => {
    return (props: any) => <input data-testid="dropdown" {...props} />;
});

jest.mock("../../../hooks/api/transactions");

const transaction = [
    {
        "id": 1,
        "user_id": 1,
        "account_id": 1,
        "amount": -50.25,
        "type": "debit",
        "description": "Grocery Store",
        "date": "2024-06-01T10:00:00Z"
    }, {
        "id": 2,
        "user_id": 1,
        "account_id": 1,
        "amount": 40.25,
        "type": "debit",
        "description": "Grocery Store 1",
        "date": "2024-06-01T10:00:00Z"
    }
];

describe("Transactions", () => {

    beforeEach(() => {
        (useTransactionsList as jest.Mock).mockReturnValue({
            isLoading: false,
            isRefetching: false,
            data: {
                pages: [transaction]
            },
            error: null,
            hasNextPage: false,
            refetch: jest.fn(),
            fetchNextPage: jest.fn()
        });

    })

    test("Should able to render transaction screen and see transaction list", () => {
        render(
            <Transactions />
        )
        expect(screen.getByText(transaction[0].description)).toBeDefined();
        expect(screen.getByText(`${transaction[0].amount}`)).toBeDefined();

        expect(screen.getByText(transaction[1].description)).toBeDefined();
        expect(screen.getByText(`+ ${transaction[1].amount}`)).toBeDefined();
    });

    test("Should able to search in transactions", () => {
        (useTransactionsList as jest.Mock).mockReturnValue({
            isLoading: false,
            isRefetching: false,
            data: {
                pages: [[transaction[0]]]
            },
            error: null,
            hasNextPage: false,
            refetch: jest.fn(),
            fetchNextPage: jest.fn()
        });

        render(
            <Transactions />
        );

        const input = screen.getByTestId("search-in-transaction");
        fireEvent.changeText(input, "Hello")
        fireEvent(input, "submitEditing", { nativeEvent: { text: "Hello" } });

        expect(input.props.value).toBe("Hello");
        expect(screen.getByText(transaction[0].description)).toBeDefined();
    });
})