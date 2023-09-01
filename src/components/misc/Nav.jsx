import { Text, Box, Link ,Image} from "@chakra-ui/react";
import React from "react";
import linkIcon from "../../assets/link.png";
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
        gap={"1rem"}
      >
        <Link
          href="#projects"
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"14px"}
          _hover={{ background: "#103c47" }}
          className="activeEle"
        >
          Projects
        </Link>
        <Link
          href="#blogs"
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"14px"}
          _hover={{ background: "#103c47" }}
          className="activeEle"
        >
          Blogs
        </Link>

        <Link
          href="https://drive.google.com/file/d/1_GaM8fHMNrFqw0FhvxupZdtEuZ2a-Q_v/view"
          target="_blank"
          textAlign={"center"}
          width={"100%"}
          border={"1px solid gray"}
          height={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"14px"}
          _hover={{ background: "#103c47" }}
          className="activeEle"
          gap={'4px'}
        >
          Resume
          <Image src={linkIcon} width={"14px"} height={"14px"}></Image>
        </Link>
      </Box>
    </div>
  );
};

export default Nav;
