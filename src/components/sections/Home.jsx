import React from "react";
import { Box} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      color={"#9FDBE9"}
      fontSize={{ base: "32px", lg: "48px" }}
      // background={"#1a1a1a"}
      display={"flex"}
      flexDir={"column"}
      id="home"
    >
      <Box
        margin={"2rem"}
        marginBottom={"0"}
        paddingLeft={"2rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Box margin={"4rem 0rem 2rem 0rem"}>hi i'm mukul ! 👋</Box>
        <Box fontSize={"20px"}></Box>
      </Box>
    </Box>
  );
};

export default Home;
