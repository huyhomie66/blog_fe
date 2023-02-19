import { IBlog } from "@/types/blog";
import { addBlog, getBlogs } from "@/service/blog";

describe("Blog functionality", () => {
  test("Add a blog", () => {
    const blog: IBlog = {
      title: "Test Blog",
      content: "This is a test blog",
      createdBy: "Test User",
      createdAt: new Date()
    };
    addBlog(blog);
    const blogs = getBlogs();
    expect(blogs.length).toBe(1);
    expect(blogs[0]).toEqual({
      ...blog,
      createdAt: blog.createdAt.toISOString()
    });
  });

  test("Get all blogs", () => {
    const blog1: IBlog = {
      title: "Test Blog 1",
      content: "This is test blog 1",
      createdBy: "Test User",
      createdAt: new Date()
    };
    const blog2: IBlog = {
      title: "Test Blog 2",
      content: "This is test blog 2",
      createdBy: "Test User",
      createdAt: new Date()
    };
    addBlog(blog1);
    addBlog(blog2);
    const blogs = getBlogs();
    expect(blogs.length).toBe(3);
  });
});
