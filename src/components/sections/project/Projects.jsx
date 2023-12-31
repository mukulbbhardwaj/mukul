import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";
import { binary, mChat, monke, gameroom } from "./projectData";

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
          <Text>pr</Text>
          <Text color={"#BAE7AA"}>o</Text>
          <Text>jects</Text>
        </Box>
        <Grid
          gap={6}
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        >
          <ProjectItem
            title={gameroom.title}
            desc={gameroom.desc}
            live={gameroom.live}
            tech={gameroom.tech}
            git={gameroom.git}
          />
          <ProjectItem
            title={binary.title}
            desc={binary.desc}
            git={binary.git}
            live={binary.live}
            tech={binary.tech}
          />
          <ProjectItem
            title={mChat.title}
            desc={mChat.desc}
            git={mChat.git}
            live={mChat.live}
            tech={mChat.tech}
          />
          <ProjectItem
            title={monke.title}
            tech={monke.tech}
            desc={monke.desc}
            git={monke.git}
            live={monke.live}
          />
        </Grid>
        <Box display={"flex"} flexDir={"column"} gap={"1rem"}></Box>
      </Box>
    </Box>
  );
};

export default Projects;
