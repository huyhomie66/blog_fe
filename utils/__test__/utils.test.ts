import { IBlog } from "@/types/blog";
import { getSortBlogs } from "..";

describe("getSortBlogs", () => {
  const blogs: IBlog[] = [
    {
      title: "First Blog",
      content: "Lorem ipsum",
      createdAt: new Date(),
      createdBy: ""
    },
    {
      title: "Second Blog",
      content: "Dolor sit amet",
      createdBy: "",
      createdAt: new Date()
    },
    {
      title: "Third Blog",
      createdAt: new Date(),

      content: "Consectetur adipiscing elit",
      createdBy: ""
    }
  ];

  it("should return blogs sorted by date in descending order", () => {
    const result = getSortBlogs(blogs, "date_desc");
    expect(result[0].title).toBe("First Blog");
    expect(result[1].title).toBe("Second Blog");
    expect(result[2].title).toBe("Third Blog");
  });
});
