import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Login from "../Login";
import { useAuth } from "../../../context/AuthContext";

const loginMock = jest.fn().mockResolvedValue(null);

jest.mock("../../../context/AuthContext");
describe("Login Screen", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useAuth as jest.Mock).mockReturnValue({
            state: { loading: false, loginError: null as null | { message: string }, username: "" },
            login: loginMock,
        });
    });

    it("renders correctly", () => {
        const { getByPlaceholderText, getByText } = render(<Login />);
        expect(getByText("LOGIN")).toBeTruthy();
        expect(getByPlaceholderText("Email")).toBeTruthy();
        expect(getByPlaceholderText("Password")).toBeTruthy();
        expect(getByText("Log in")).toBeTruthy();
    });

    it("shows validation errors for empty inputs", async () => {
        const { getByText, getByPlaceholderText } = render(<Login />);

        fireEvent.press(getByText("Log in"));

        await waitFor(() => {
            expect(getByText("Email is required")).toBeTruthy();
            expect(getByText("Password is required")).toBeTruthy();
        });

        // Invalid email
        fireEvent.changeText(getByPlaceholderText("Email"), "invalidemail");
        fireEvent.press(getByText("Log in"));
        await waitFor(() => {
            expect(getByText("Invalid email address")).toBeTruthy();
        });

        // Short password
        fireEvent.changeText(getByPlaceholderText("Password"), "123");
        fireEvent.press(getByText("Log in"));
        await waitFor(() => {
            expect(getByText("Password must be at least 6 characters")).toBeTruthy();
        });
    });

    it("calls login when inputs are valid", async () => {
        const { getByText, getByPlaceholderText } = render(<Login />);
        fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
        fireEvent.changeText(getByPlaceholderText("Password"), "123456");

        fireEvent.press(getByText("Log in"));

        await waitFor(() => {
            expect(loginMock).toHaveBeenCalledWith({
                username: "test@example.com",
                password: "123456",
            });
        });
    });

    it("shows loading indicator when state.loading is true", () => {
        (useAuth as jest.Mock).mockReturnValue({
            state: { loading: true, loginError: null as null | { message: string }, username: "" },
            login: loginMock,
        });

        const { getByTestId } = render(<Login />);
        expect(getByTestId("activity-indicator")).toBeTruthy();
    });

    it("shows loginError message", () => {
        (useAuth as jest.Mock).mockReturnValue({
            state: { loading: true, loginError: { message: "Invalid credentials" }, username: "" },
            login: loginMock,
        });
        const { getByText } = render(<Login />);
        expect(getByText("Invalid credentials")).toBeTruthy();
    });
});

