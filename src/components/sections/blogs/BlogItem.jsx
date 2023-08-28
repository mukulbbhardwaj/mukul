import React from "react";
import { Box, Text, Image, Link } from "@chakra-ui/react";

const BlogItem = ({ title, date, blogLink }) => {
  return (
    <Box
      bgColor={"#202229"}
      padding={"1rem"}
      borderRadius={"14px"}
      fontFamily={"PT Sans"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Link href={blogLink} target="_blank">
        <Text fontSize={{ base: "20px", lg: "24px" }} fontWeight={400}>
          {title}
        </Text>
      </Link>
      <Text fontSize={"14px"}>{date}</Text>
    </Box>
  );
};

export default BlogItem;
