import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  const aboutData =
    "Hey there, I'm Mukul Bhardwaj , a fresh engineering graduate with an interest in programming and software development. Currently I do Frontend Web Development and learning Backend.";
  return (
    <Box id="about">
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
