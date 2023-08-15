import React from "react";
import { Box, Text } from "@chakra-ui/react";

import ProjectItem from "./ProjectItem";
import { binary, mChat, monke } from "./projectData";
import binaryLogo from "../../../assets/binaryDiary.png";
import monkeLogo from "../../../assets/monkepod.png";
import mchatLogo from "../../../assets/mChat.png";

const Projects = () => {
  return (
    <Box background={"#141E24"} color={"#9FDBE9"} id="projects">
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
          <Text>w</Text>
          <Text color={"#BAE7AA"}>o</Text>
          <Text>rk</Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} gap={"1rem"}>
          <ProjectItem
            title={binary.title}
            desc={binary.desc}
            git={binary.git}
            live={binary.live}
            img={binaryLogo}
            tech={binary.tech}
          />
          <ProjectItem
            title={mChat.title}
            desc={mChat.desc}
            git={mChat.git}
            live={mChat.live}
            img={mchatLogo}
            tech={mChat.tech}
          />
          <ProjectItem
            title={monke.title}
            tech={monke.tech}
            desc={monke.desc}
            git={monke.git}
            live={monke.live}
            img={monkeLogo}
          />
        </Box>
        {/* <Link to={"/"}>
          <Button>back to navigation</Button>
        </Link> */}
      </Box>
    </Box>
  );
};

export default Projects;
