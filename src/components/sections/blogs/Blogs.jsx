import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BlogItem from "./BlogItem";

const Blogs = () => {
  return (
    <Box background={"#141E24"} color={"#9FDBE9"} id="blogs">
      <Box
        margin={{ base: "2rem", lg: "2rem 20rem 2rem 20rem" }}
        borderTop={"1px solid gray"}
      >
        <Box
          fontSize={{ base: "24px", lg: "48px" }}
          color={" #A2ABDD"}
          display={"flex"}
          padding={"4rem 0rem 2rem 0rem"}
        >
          <Text>bl</Text>
          <Text color={"#BAE7AA"}>o</Text>
          <Text>gs</Text>
        </Box>
        <Box>
          <BlogItem title={"coming soon..."} date={'07th Oct 2023'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Blogs;
