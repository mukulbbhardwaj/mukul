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
            _hover={{ background: "#103c47", transform: "scale(1.1, 1.1)" }}
            padding={"12px"}
            borderRadius={"50%"}
            aria-label="github"
          >
            <Image
              width={"32px"}
              height={"32px"}
              src={githubLogo}
              alt="github"
            ></Image>
          </Link>

          <Link
            href={linkedin}
            target="_blank"
            _hover={{ background: "#103c47", transform: "scale(1.1, 1.1)" }}
            padding={"12px"}
            borderRadius={"50%"}
            aria-label="linkedin"
          >
            <Image
              width={"32px"}
              height={"32px"}
              src={linkedinLogo}
              alt="linkedin"
            ></Image>
          </Link>

          <Link
            href={twitter}
            target="_blank"
            _hover={{ background: "#103c47", transform: "scale(1.1, 1.1)" }}
            padding={"12px"}
            borderRadius={"50%"}
            aria-label="twitter"
          >
            <Image
              width={"32px"}
              height={"32px"}
              src={twitterLogo}
              alt="twitter"
            ></Image>
          </Link>

          <Link
            href={gmail}
            target="_blank"
            _hover={{ background: "#103c47", transform: "scale(1.1, 1.1)" }}
            padding={"12px"}
            borderRadius={"50%"}
            aria-label="gmail"
          >
            <Image
              width={"32px"}
              height={"32px"}
              src={gmailLogo}
              alt="gmail"
            ></Image>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
