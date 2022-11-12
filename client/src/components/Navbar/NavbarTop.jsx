import React from "react";
import { Box, Button, Heading, Show, Text, Hide } from "@chakra-ui/react";
import MenuBar from "../Chakra Comp/Menu";
import Flag from "../Flag_Currency/Flag";
import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png"
export const NavbarTop = () => {
  return (
    <>
      <Box
        // border={"1px solid"}
        display="flex"
        bg="teal.800"
        w="100%"
        p={4}
        color="white"
        gap={[5, 5, 5, 40]}
      >
        <Box
          width={["35%", "40%", "40%", "40%"]}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
        >
          <Heading fontSize={["md", "md", "2xl"]} fontFamily={"monospace"}>
            {" "}
            <Link to="/stays">Treasury Trip</Link>
          </Heading>
        </Box>
        <Box
          alignItems={"center"}
          w={["70%", "70%", "70%", "40%"]}
          display="flex"
          justifyContent={"center"}
          // border="1px solid red"
          gap={[6, 10, 25]}
        >
          <Box
            display="flex"
            justifyContent={"space-around"}
            w={["100%", "30%", "40%", "20%"]}
            // border="1px solid"
            alignItems="center"
          >
            <Text fontSize={["sm", "md"]}>INR</Text>
            <Flag />
          </Box>
          <Hide breakpoint="(max-width: 1024px)">
            <Button
              bg="teal"
              fontSize={["sm", "md"]}
              p={5}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
              minW="max-content"
            >
              List your Property
            </Button>
          </Hide>
          <Hide breakpoint="(max-width: 600px)">
            <Link to="/register">
              {" "}
              <Button color={"black"}>Register </Button>
            </Link>
            <Link to="/login">
              {" "}
              <Button color={"black"}>Login</Button>
            </Link>
          </Hide>
        </Box>
        <Show breakpoint="(max-width: 600px)">
          <MenuBar />
        </Show>
      </Box>
    </>
  );
};
