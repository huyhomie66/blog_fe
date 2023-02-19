import { IBlog } from "@/types/blog";
import { getLocalStorageItem, setLocalStorageItem } from "./storage";

export const KEY = "blogs";

const getBlogs = () => getLocalStorageItem(KEY) || [];

const addBlog = (blog: IBlog) => {
  const blogs = getBlogs();
  setLocalStorageItem(KEY, [...blogs, blog]);
};

export { getBlogs, addBlog };
