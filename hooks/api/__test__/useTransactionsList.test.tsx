import { renderHook, act } from "@testing-library/react-hooks";
import { useTransactionsList } from "../transactions";
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

describe("useTransactionsList hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns data correctly when API succeeds", async () => {
    const mockPage1 = [{ id: 1, amount: 100 }];
    const mockPage2 = [{ id: 2, amount: 200 }];

    // Mock Axios responses for two pages
    mockedAxios.get
      .mockResolvedValueOnce({ data: mockPage1 })
      .mockResolvedValueOnce({ data: mockPage2 });

    const { result, waitFor } = renderHook(
      () => useTransactionsList({ search: "", sort: "", order: "", limit: 10 }),
      { wrapper: createWrapper() }
    );

    // Wait for the first page
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.pages[0]).toEqual(mockPage1);

    // Fetch next page
    await act(async () => {
      await result.current.fetchNextPage();
    });
    await waitFor(() => expect(result.current.data?.pages[1]).toEqual(mockPage2));
    
    expect(mockedAxios.get).toHaveBeenCalledTimes(2);
    expect(mockedAxios.get).toHaveBeenCalledWith("/transactions", {
      params: expect.any(Object),
    });
  });

  it("returns error when API fails", async () => {
    const mockError = new Error("Network Error");
    mockedAxios.get.mockRejectedValueOnce(mockError);

    const { result, waitFor } = renderHook(
      () => useTransactionsList({ search: "", sort: "", order: "", limit: 10 }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => result.current.isError);

    expect(result.current.error).toEqual(mockError);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
