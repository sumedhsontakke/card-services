import CustomButton from "../CustomButton";
import { render, fireEvent } from "@testing-library/react-native";
import '@testing-library/jest-native/extend-expect';

describe('CustomButton component', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<CustomButton title="Click Me" onPress={() => {}} />);
    expect(getByText("Click Me")).toBeTruthy();
  });

  it('calls onPress when tapped', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<CustomButton title="Press" onPress={mockFn} />);
    fireEvent.press(getByText("Press"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});