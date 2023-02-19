import { renderHook, act } from "@testing-library/react";
import { useSort } from "../useSortBlog";

describe("useSort", () => {
  it("returns the initial selected value", () => {
    const { result } = renderHook(() => useSort({}));
    expect(result.current.selectedValue).toBe("date_desc");
  });

  it("calls the onSortChange function when the selected value changes", () => {
    const onSortChange = jest.fn();
    const { result } = renderHook(() => useSort({ onSortChange }));

    act(() => {
      result.current.handleSortChange({
        target: { value: "date_asc" }
      } as React.ChangeEvent<HTMLSelectElement>);
    });

    expect(onSortChange).toHaveBeenCalledWith("date_asc");
    expect(result.current.selectedValue).toBe("date_asc");
  });
});
