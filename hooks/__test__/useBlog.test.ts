import { renderHook, act } from "@testing-library/react";
import { getBlogs } from "@/service/blog";
import { useBlogList } from "../useBlog";

jest.mock("@/service/blog", () => ({
  getBlogs: jest.fn()
}));

describe("useBlogList", () => {
  it("should return a list of blogs", async () => {
    const mockedBlogs = [
      { id: 1, title: "First Blog", content: "This is the first blog" },
      { id: 2, title: "Second Blog", content: "This is the second blog" }
    ];
    (getBlogs as jest.MockedFunction<typeof getBlogs>).mockReturnValue(
      mockedBlogs
    );

    const { result } = renderHook(() => useBlogList());

    expect(result.current.isLoading).toBe(true);

    expect(result.current.blogs).toEqual(mockedBlogs);
  });

  it("should sort blogs when onSortChange is called", async () => {
    const mockedBlogs = [
      { id: 1, title: "First Blog", content: "This is the first blog" },
      { id: 2, title: "Second Blog", content: "This is the second blog" }
    ];
    (getBlogs as jest.MockedFunction<typeof getBlogs>).mockReturnValue(
      mockedBlogs
    );

    const { result } = renderHook(() => useBlogList());

    expect(result.current.isLoading).toBe(true);

    act(() => {
      result.current.handleSortChange({
        target: { value: "date_asc" }
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(result.current.isLoading).toBe(true);

    const expectedSortedBlogs = [
      { id: 1, title: "First Blog", content: "This is the first blog" },
      { id: 2, title: "Second Blog", content: "This is the second blog" }
    ];

    expect(result.current.blogs).toEqual(expectedSortedBlogs);

    expect(result.current.selectedValue).toEqual("date_asc");
  });
});
