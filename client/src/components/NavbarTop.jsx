import React from "react";
import {Box, Button, Heading, Show, Text, Hide} from "@chakra-ui/react";
import MenuBar from "./Chakra Comp/Menu";
import Flag from "./Flag_Currency/Flag";
// import Logo from "../assets/Logo.png"
export const NavbarTop = () => {
  return (
    <>
      <Box
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
            Treasury Trip
          </Heading>
        </Box>
        <Box
          alignItems={"center"}
          w={["70%", "70%", "70%", "45%"]}
          display="flex"
          gap={[6, 10, 25]}
        >
          <Box
            display="flex"
            justifyContent={"space-around"}
            w={["100%", "30%", "40%", "20%"]}
            mr={["50px", "50px", "10px", "30px"]}
            alignItems="center"
          >
            <Text fontSize={["sm", "md", "lg"]}>INR</Text>
            <Flag />
          </Box>
          <Hide breakpoint="(max-width: 1024px)">
            <Button
              bg="teal"
              fontSize={["sm", "md", "lg"]}
              p={5}
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              List your Property
            </Button>
          </Hide>
          <Hide breakpoint="(max-width: 600px)">
            <Button color={"black"}>Register</Button>
            <Button color={"black"}>Login</Button>
          </Hide>
        </Box>
        <Show breakpoint="(max-width: 600px)">
          <MenuBar />
        </Show>
      </Box>
    </>
  );
};
