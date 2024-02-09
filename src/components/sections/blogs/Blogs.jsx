import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BlogItem from "./BlogItem";
import { blogs } from "./blogData";
const Blogs = () => {
  return (
    <Box color={"#9FDBE9"} id="blogs">
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
        {blogs.map((blog, idx) => (
          <Box>
            {/* <Text fontSize={12} opacity={0.5}>{idx}</Text> */}
            <BlogItem
              key={idx}
              title={idx + '.    ' + blog.title}
              date={blog.date}
              blogLink={blog.link}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blogs;
