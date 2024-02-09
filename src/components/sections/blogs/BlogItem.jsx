import React from "react";
import { Box, Text,Link } from "@chakra-ui/react";

const BlogItem = ({ title, date, blogLink }) => {
  return (
    <Box
      display={"flex"}
      border={"0.5px solid #252e33"}
      padding={"1rem"}
      borderRadius={"2rem"}
      gap={"1rem"}
      justifyContent={"space-between"}
      alignItems={"center"}
      fontFamily={"PT Sans"}
      className="activeEle"
      _hover={{ borderColor: "white" }}
    >
      <Link
        href={blogLink}
        target="_blank"
        _hover={{ color: "white" }}
        aria-label={title}
        display={"flex"}
        alignItems={"center"}
        fontSize={{ base: "20px", lg: "18px" }}
        fontWeight={"bold"}
      >
        {title}
      </Link>
      <Text fontSize={"12px"} color={"white"}>
        {date}
      </Text>
    </Box>
  );
};

export default BlogItem;
