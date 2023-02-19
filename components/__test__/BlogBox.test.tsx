// components/__test__/BlogBox.test.tsx
import { render } from "@testing-library/react";
import BlogBox from "../BlogBox";

describe("BlogBox", () => {
  it("renders BlogBox unchanged", () => {
    const blogData = {
      id: "1",
      title: "Test Blog",
      createdAt: new Date(),
      createdBy: "Test User",
      content: "Test content",
      isLoading: false
    };

    const { container } = render(<BlogBox {...blogData} />);
    expect(container).toMatchSnapshot();
  });
});
