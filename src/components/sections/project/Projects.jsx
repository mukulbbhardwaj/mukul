import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";
import { projectData } from "./projectData";

const Projects = () => {
  return (
    <Box id="projects">
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
          {
            projectData.map((item) => (
              <ProjectItem
                key={item.title}
                title={item.title}
                desc={item.desc}
                live={item.live}
                tech={item.tech}
                git={item.git}/>
            ))
          }
        </Grid>
        <Box display={"flex"} flexDir={"column"} gap={"1rem"}></Box>
      </Box>
    </Box>
  );
};

export default Projects;
