import { Box, Image, Text, Link } from "@chakra-ui/react";
import React from "react";

import gitLogo from "../../../assets/github.png";
import linkLogo from "../../../assets/link.png";

const ProjectItem = ({ title, desc, img, tech, live, git }) => {
  return (
    <Box
      display={"flex"}
      bgColor={"#161f24"}
      border={"1px solid #252e33"}
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
            <Link href={live} target="_blank">
              <Image width={"24px"} height={"24px"} src={linkLogo} />
            </Link>
            {git ? (
              <Link href={git} target="_blank">
                <Image width={"24px"} height={"24px"} src={gitLogo} />
              </Link>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        width={{ base: "100%", lg: "400px" }}
      >
        <Link href={live} target="_blank">
          <Text fontSize={{ base: "24px", lg: "48px" }} fontWeight={600}>
            {title}
          </Text>
        </Link>
        <Text>{desc}</Text>
        <Text marginTop={"8px"}>
          Tech:-
          <Text fontWeight={"600"}>{tech}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectItem;
