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
      margin={'1rem'}
    >
      <Link href={blogLink} target="_blank">
        <Text fontSize={{ base: "18px", lg: "20px" }} color={'white'} fontWeight={400}>
          {title}
        </Text>
      </Link>
      <Text fontSize={"14px"}>{date}</Text>
    </Box>
  );
};

export default BlogItem;
