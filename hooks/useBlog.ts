import { getBlogs } from "@/service/blog";
import { IBlog } from "@/types/blog";
import { useEffect, useState } from "react";
import { useSort } from "@/hooks/useSortBlog";
import { getSortBlogs } from "@/utils";

const useBlogList = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setLoading] = useState(false);

  const onSortChange = (selectOption: string) => {
    setLoading(true);
    const sortedBlogs = getSortBlogs(blogs, selectOption);
    setBlogs(sortedBlogs);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  const { selectedValue, handleSortChange } = useSort({
    onSortChange
  });

  function init() {
    setLoading(true);
    const result = getBlogs();
    if (result) {
      const sortedBlogs = getSortBlogs(result, selectedValue);
      setBlogs(sortedBlogs);
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }

  useEffect(() => {
    init();
  }, []);
  return { blogs, handleSortChange, selectedValue, isLoading };
};

export { useBlogList };
