import React from "react";
import { render, userEvent } from "@testing-library/react-native";
import Home from "../Home";
import * as navigateService from "../../../services/navigationService";

// Mock hooks
const mockUseAccountDetails = {
    data: [{
        "id": 1,
        "user_id": 1,
        "name": "Checking",
        "balance": 1500.5
    }],
    isLoading: false,
    error: null,
};

const mockUseCardsList = {
    data: [{
        "id": 1,
        "user_id": 1,
        "number": "4111111111111111",
        "expiry": "12/26",
        "cvv": "123"
    }],
    isLoading: false,
};

jest.mock("../../../hooks/api/accounts", () => ({
    useAccountDetails: jest.fn(() => mockUseAccountDetails),
}));

jest.mock("../../../hooks/api/cards", () => ({
    useCardsList: jest.fn(() => mockUseCardsList),
}));

jest.mock("../../../services/navigationService", () => ({
    navigate: jest.fn()
}))


describe("Home Screen", () => {
    it("renders Accounts and Cards with correct props", () => {
        const { getByText } = render(<Home />);

        expect(getByText(`${mockUseAccountDetails.data[0].name} Account:`)).toBeDefined();

        expect(getByText(`Card no. ${mockUseCardsList.data[0].number}`)).toBeDefined();
        expect(getByText(`Expiry: ${mockUseCardsList.data[0].expiry}`)).toBeDefined();

    });

    it("Should able to redirec to transaction page onpress of account card", async() => {
        const mockSpy = jest.spyOn(navigateService, "navigate");
        const { getByTestId } = render(<Home />);
        await userEvent.press(getByTestId("account-card"));
        expect(mockSpy).toHaveBeenCalled();
    });
});
