import { addBlog } from "@/service/blog";
import { IBlog } from "@/types/blog";
import { Input, Textarea, Text, Flex, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import React from "react";

const CreateBlog = () => {
  const toast = useToast();

  const onSubmit = (values: IBlog) => {
    addBlog(values);
    toast({
      title: "Blog created.",
      description: "We've created your blog for you.",
      status: "success",
      duration: 5000,
      isClosable: true
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      createdAt: new Date(Date.now()),
      createdBy: ""
    },
    onSubmit: onSubmit
  });

  return (
    <Flex alignItems={"center"} justifyContent="center">
      <form
        style={{
          height: "40vh",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
        }}
        onSubmit={formik.handleSubmit}
      >
        <Text fontWeight={"bold"}>Create Blog</Text>
        <Input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          placeholder={"title"}
        />
        <Input
          name="createdBy"
          value={formik.values.createdBy}
          onChange={formik.handleChange}
          placeholder={"create by"}
        />
        <Textarea
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          placeholder={"content"}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Flex>
  );
};

export default CreateBlog;
