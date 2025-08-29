import { renderHook } from "@testing-library/react-hooks";
import { useAccountDetails } from "../accounts";
import axios from "../../../config/adaptor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock axios
jest.mock("../../../config/adaptor");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Create wrapper for react-query
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useAccountDetails hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return data when API call succeeds", async () => {
    const mockData = [{ id: 1, name: "Account 1" }];
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const { result, waitFor } = renderHook(() => useAccountDetails(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith("/accounts");
  });

  it("should return error when API call fails", async () => {
    const mockError = new Error("Network Error");
    mockedAxios.get.mockRejectedValueOnce(mockError);

    const { result, waitFor } = renderHook(() => useAccountDetails(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(mockError);
    expect(mockedAxios.get).toHaveBeenCalledWith("/accounts");
  });
});
