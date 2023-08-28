import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

const ProjectItem = ({ title, desc, live, git }) => {
  return (
    <Box
      display={"flex"}
      bgColor={"#161f24"}
      border={"1px solid #252e33"}
      padding={"1rem"}
      borderRadius={"2rem"}
      gap={"1rem"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      fontFamily={"PT Sans"}
    >
      <Link href={live} target="_blank" _hover={{ color: "white" }}>
        <Text fontSize={{ base: "20px", lg: "32px" }} fontWeight={"bold"}>
          {title}
        </Text>
      </Link>
      <Text color={"white"} fontFamily={"PT Sans"}>
        {desc}
      </Text>

      <Link href={git} target="_blank" _hover={{ color: "white" }}>
        <Text
          _hover={{ color: "white" }}
          fontWeight={"600"}
          position={"relative"}
          bottom={"0px"}
        >
          view on Github
        </Text>
      </Link>
    </Box>
  );
};

export default ProjectItem;
