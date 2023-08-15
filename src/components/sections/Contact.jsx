import React from "react";
import { Box, Text, Button, Image, Link } from "@chakra-ui/react";
import githubLogo from "../../assets/github.png";
import gmailLogo from "../../assets/gmail.png";
import linkedinLogo from "../../assets/linkedin.png";
import twitterLogo from "../../assets/twitter.png";
import { github, linkedin, twitter, gmail } from "../socialLinks";

const Contact = () => {
  return (
    <Box
      id="contact"
      background={"#141E24"}
      color={"#9FDBE9"}
      fontSize={{ base: "24px", lg: "32px" }}
    >
      <Box
        borderLeft={"5px solid #5781c9"}
        borderRight={"5px solid #5781c9"}
        margin={{ base: "2rem", lg: "2rem 20rem 2rem 20rem" }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={{ base: "1rem", lg: "3rem" }}
        >
          <Link
            href={github}
            target="_blank"
            _hover={{ background: "#103c47" }}
            padding={"12px"}
            borderRadius={"50%"}
          >
            <Image width={"32px"} height={"32px"} src={githubLogo}></Image>
          </Link>

          <Link
            href={linkedin}
            target="_blank"
            _hover={{ background: "#103c47" }}
            padding={"12px"}
            borderRadius={"50%"}
          >
            <Image width={"32px"} height={"32px"} src={linkedinLogo}></Image>
          </Link>

          <Link
            href={twitter}
            target="_blank"
            _hover={{ background: "#103c47" }}
            padding={"12px"}
            borderRadius={"50%"}
          >
            <Image width={"32px"} height={"32px"} src={twitterLogo}></Image>
          </Link>

          <Link
            href={gmail}
            target="_blank"
            _hover={{ background: "#103c47" }}
            padding={"12px"}
            borderRadius={"50%"}
          >
            <Image width={"32px"} height={"32px"} src={gmailLogo}></Image>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
