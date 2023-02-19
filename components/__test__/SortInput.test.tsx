// components/__test__/BlogBox.test.tsx
import { render } from "@testing-library/react";
import SortInput from "../SortInput";

describe("SortInput", () => {
  it("renders SortInput unchanged", () => {
    const { container } = render(
      <SortInput handleSortChange={() => {}} selectedValue="" />
    );
    expect(container).toMatchSnapshot();
  });
});
