import { Box, Text, Link, Image } from "@chakra-ui/react";
import React from "react";
import linkIcon from "../../../assets/link.png";
const ProjectItem = ({ title, desc, live, git }) => {
  return (
    <Box
      display={"flex"}
      bgColor={"#212121"}
      border={"0.5px solid #252e33"}
      padding={"1rem"}
      borderRadius={"2rem"}
      gap={"1rem"}
      flexDir={"column"}
      justifyContent={"space-evenly"}
      fontFamily={"PT Sans"}
      className="activeEle"
      _hover={{ borderColor: "white" }}
    >
      <Link
        href={live}
        target="_blank"
        _hover={{ color: "white" }}
        aria-label={title}
        display={"flex"}
        gap={"8px"}
        alignItems={"center"}
      >
        <Text fontSize={{ base: "20px", lg: "32px" }} fontWeight={"bold"}>
          {title}
        </Text>
        <Image src={linkIcon} width={"24px"} height={"24px"}></Image>
      </Link>
      <Text color={"white"} fontFamily={"PT Sans"}>
        {desc}
      </Text>
      <Link
        href={git}
        target="_blank"
        _hover={{ color: "white" }}
        aria-label="view on Github"
        display={"flex"}
        gap={"4px"}
        alignItems={"center"}
      >
        <Text
          _hover={{ color: "white" }}
          fontWeight={"600"}
          position={"relative"}
          bottom={"0px"}
        >
          view on Github
        </Text>
        <Image src={linkIcon} width={"14px"} height={"14px"}></Image>
      </Link>
    </Box>
  );
};

export default ProjectItem;
