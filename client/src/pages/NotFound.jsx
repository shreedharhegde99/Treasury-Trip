import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import NavbarR from "../components/Navbar/NavbarR";
// import {useNavigate} from "react-router-dom";

const NotFound = () => {
  // const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/stays");
  //   console.log("Redirecting.....");
  // }, 3000);

  return (
    <Box>
      <NavbarR />
      <Box>
        <Image
          w={"400px"}
          m="auto"
          src="https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/200w.webp?cid=ecf05e4745qsxweusdt3124f0pcf9zocj0rzi2po1dtvxyij&rid=200w.webp&ct=g"
        />
        <Heading
          color={"blackAlpha.700"}
          fontFamily={"cursive"}
          textAlign={"center"}
        >
          Page Not Found
        </Heading>
      </Box>
    </Box>
  );
};

export default NotFound;
