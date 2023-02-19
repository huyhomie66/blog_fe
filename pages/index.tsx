import { Box, VStack, Button, Text, HStack } from "@chakra-ui/react";
import SortInput from "@/components/SortInput";
import { useBlogList } from "@/hooks/useBlog";
import { seedBlog } from "@/service/seed";
import { useRouter } from "next/router";
import BlogBox from "@/components/BlogBox";
import React from "react";

export default function Home() {
  const { blogs, isLoading, selectedValue, handleSortChange } = useBlogList();
  const { push } = useRouter();
  const onCreateNewOne = () => push("/create-blog");

  return (
    <Box>
      <VStack pt={20} alignItems="center" justifyContent={"center"}>
        {blogs?.length > 0 && (
          <VStack>
            <HStack width={"100%"} mb={6} justifyContent={"space-between"}>
              <SortInput
                selectedValue={selectedValue}
                handleSortChange={handleSortChange}
              />
              <Button onClick={onCreateNewOne}>Create new one</Button>
            </HStack>

            {blogs.map((e, i) => (
              <BlogBox key={i} {...e} isLoading={isLoading} />
            ))}
          </VStack>
        )}
        {blogs?.length === 0 && <Text fontSize={"xl"}>Empty data</Text>}
        <Button onClick={onCreateNewOne}>Create new one</Button> <Text>or</Text>
        <Button onClick={seedBlog}>Seed data</Button>
      </VStack>
    </Box>
  );
}
