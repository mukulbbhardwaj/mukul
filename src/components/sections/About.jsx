import { Box, Button, Text, Link } from "@chakra-ui/react";
import React from "react";

const About = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1_GaM8fHMNrFqw0FhvxupZdtEuZ2a-Q_v/view";
  const aboutData =
    "Hey there, I'm Mukul Bhardwaj , a fresh engineering graduate with an interest in programming and software development. Currently I do Frontend Web Devlopment and learning Backend.";
  return (
    <Box background={"#141E24"} color={"#9FDBE9"} id="about">
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
          <Text>ab</Text>
          <Text color={"#BAE7AA"}>o</Text>
          <Text>ut</Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
          gap={"3rem"}
        >
          <Box width={{ base: "100%" }} display={"flex"} flexDir={"column"}>
            <Text
              fontSize={{ base: "18px", lg: "24px" }}
              fontFamily={"PT Sans"}
              textAlign={"left"}
            >
              {aboutData}
            </Text>
            <Link
              href={resumeLink}
              margin={"1rem"}
              textDecor={"none"}
              target="_blank"
              color={"#BAE7AA"}
            >
              <Text
                fontSize={"18px"}
                border={"1px solid white"}
                fontFamily={"PT Sans"}
                width={"80px"}
                padding={"4px"}
                borderRadius={"xl"}
                _hover={{ bgColor: "#1e2d36" }}
                textDecor={"none"}
              >
                Resume
              </Text>
            </Link>
          </Box>
          <Box
            border={"1px solid gray"}
            borderRadius={"xl"}
            fontFamily={"PT Sans"}
            padding={"1rem"}
          >
            <Text
              fontSize={"lg"}
              color={"#BAE7AA"}
              fontWeight={"400"}
              textDecor={"blue"}
            >
              Skills :
            </Text>
            <Box
              display={"flex"}
              flexDir={{ base: "row", lg: "column" }}
              marginBottom={"1rem"}
              gap={{ base: "1rem", lg: "0rem" }}
              fontWeight={600}
            >
              <Text>TypeScript</Text>
              <Text>JavaScript</Text>
              <Text>ReactJs</Text>
            </Box>
            <Text fontSize={"lg"} color={"#BAE7AA"} fontWeight={400}>
              Currently learning:
            </Text>
            <Box fontWeight={600}>
              <Text>NodeJs</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
