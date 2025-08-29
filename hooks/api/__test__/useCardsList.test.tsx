import { renderHook } from "@testing-library/react-hooks";
import { useCardsList } from "../cards";
import axios from "../../../config/adaptor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


jest.mock("../../../config/adaptor");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useCardsList hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns data when API call succeeds", async () => {
    const mockData = [{ id: 1, name: "Card 1" }];
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const { result, waitFor } = renderHook(() => useCardsList(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith("/cards");
  });

  it("returns error when API call fails", async () => {
    const mockError = new Error("Network Error");
    mockedAxios.get.mockRejectedValueOnce(mockError);

    const { result, waitFor } = renderHook(() => useCardsList(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(mockError);
    expect(mockedAxios.get).toHaveBeenCalledWith("/cards");
  });
});
