import { Text, Box, Image, Tooltip } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <div>
      <Box
        color={"white"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"center"}
        margin={{ base: "2rem", lg: "2rem 20rem 2rem 20rem" }}
        fontFamily={"PT Sans"}
      >
        <Text
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderLeftRadius={"14px"}
          _hover={{ background: "#103c47" }}
        >
          <a href="#projects">Projects</a>
        </Text>
        <Text
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ background: "#103c47" }}
        >
          <a href="#blogs">Blogs</a>
        </Text>
        <Text
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRightRadius={"14px"}
          _hover={{ background: "#103c47" }}
        >
          <a href="https://drive.google.com/file/d/1_GaM8fHMNrFqw0FhvxupZdtEuZ2a-Q_v/view" target="_blank">
            Resume
          </a>
        </Text>
      </Box>
    </div>
  );
};

export default Nav;
