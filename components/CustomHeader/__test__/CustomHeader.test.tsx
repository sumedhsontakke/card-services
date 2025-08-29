// __tests__/CustomHeader.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomHeader from "../../CustomHeader"; 


const mockNav = {
    canGoBack: () => true, 
    goBack: jest.fn(),
  }

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => (mockNav),
}));


describe("CustomHeader", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Logo", () => {
    const { getByTestId } = render(<CustomHeader />);
    expect(getByTestId("logo")).toBeTruthy();
  });

  it("renders back button when canGoBack is true and triggers goBack", () => {
    const { getByTestId } = render(<CustomHeader />);
    
    const backButton = getByTestId("arrow-back");
    fireEvent.press(backButton);
    expect(mockNav.goBack).toHaveBeenCalledTimes(1);
  });

});
