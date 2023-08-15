import { Text, Box, Image, Tooltip } from "@chakra-ui/react";
import React from "react";
import "./nav.css";
import aboutLogo from "../../assets/about.png";
import projectLogo from "../../assets/project.png";
import wrtingLogo from "../../assets/writing.png";
const Nav = () => {
  return (
    <div>
      <Box className="nav-container">
        <Tooltip label="home" hasArrow placement="right">
          <a href="#home">
            <Image className="nav-logo" src={aboutLogo}></Image>
          </a>
        </Tooltip>
        <Tooltip label="projects" hasArrow placement="right">
          <a href="#projects">
            <Image className="nav-logo" src={projectLogo}></Image>
          </a>
        </Tooltip>
        <Tooltip label="blogs" hasArrow placement="right">
          <a href="#blogs">
            <Image className="nav-logo" src={wrtingLogo}></Image>
          </a>
        </Tooltip>
      </Box>
    </div>
  );
};

export default Nav;
