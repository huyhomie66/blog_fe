// Import the required functions and modules
import { seedBlog } from "../seed";
import { addBlog } from "../blog";

// Mock the addBlog function
jest.mock("../blog", () => {
  return {
    addBlog: jest.fn()
  };
});

describe("seedBlog", () => {
  // Test if the function adds 100 blogs
  test("adds 100 blogs", async () => {
    await seedBlog();

    // Check if the addBlog function is called 100 times
    expect(addBlog).toHaveBeenCalledTimes(100);
  });

  // Test if the blogs have valid properties
  test("adds blogs with valid properties", async () => {
    await seedBlog();

    // Check if the addBlog function is called with a blog object that has valid properties
    expect(addBlog).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.any(String),
        content: expect.any(String),
        createdBy: expect.any(String),
        createdAt: expect.any(Date)
      })
    );
  });

  // Test if the function logs "finish" to the console
  test("logs 'finish' to the console", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    await seedBlog();

    // Check if the function logs "finish" to the console
    expect(consoleSpy).toHaveBeenCalledWith("finish");
  });
});
