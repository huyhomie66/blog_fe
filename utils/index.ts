import { IBlog } from "@/types/blog";

function getSortBlogs(blogs: IBlog[], sortOption: string): IBlog[] {
  let result;
  if (sortOption === "date_asc") {
    result = blogs.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else {
    result = blogs.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  return result;
}

export { getSortBlogs };
