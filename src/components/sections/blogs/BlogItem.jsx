import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react';
const BlogItem = ({gitLogo,title,img,desc}) => {
  return (
    <Box
      display={"flex"}
      bgColor={"#202229"}
      padding={"1rem"}
      borderRadius={"2rem"}
      gap={"1rem"}
      flexDir={{ base: "column", lg: "row" }}
      fontFamily={"mono"}
      justifyContent={"space-evenly"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Image height={"200px"} width={"200px"} src={img}></Image>
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          marginTop={"10px"}
        >
          <Box
            display={"flex"}
            gap={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        width={{ base: "100%", lg: "400px" }}
      >
        <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={600}>
          {title}
        </Text>
        <Text>{desc}</Text>
      </Box>
    </Box>
  );
}

export default BlogItem