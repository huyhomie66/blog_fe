import { Box, Text, Flex } from "@chakra-ui/react";
import Skeleton from "react-loading-skeleton";
import { FC, memo } from "react";
import { IBlog } from "@/types/blog";

interface Props extends IBlog {
  isLoading: boolean;
}

interface IField {
  title: string;
  content: string;
}

const BlogBox: FC<Props> = (props) => {
  const Field = ({ title, content }: IField) => {
    if (props.isLoading) {
      return <Skeleton data-testid="skeleton-loader" />;
    }
    return (
      <Flex>
        <Text fontWeight={"bold"}>.{title}: </Text>
        <Text>{content}</Text>
      </Flex>
    );
  };
  return (
    <Box border={"solid 0.5px "} borderRadius={4} w="70vw">
      <Field title={"Title"} content={props.title} />
      <Field
        title={"Created At"}
        content={new Date(props.createdAt).toLocaleDateString("en-GB")}
      />
      <Field title={"Created By"} content={props.createdBy} />
      <Field title={"Content"} content={props.content} />
    </Box>
  );
};

export default memo(BlogBox);
