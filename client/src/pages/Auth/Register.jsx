import {Box} from "@chakra-ui/react";
import React from "react";
import Medium from "./Medium";

const Register = () => {
  return (
    <>
      <Box
        p="20px 0px"
        border="1px solid"
        w={"40%"}
        m="auto"
        mt={10}
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        textAlign={"center"}
      >
        Register
        <Medium />
      </Box>
    </>
  );
};

export default Register;
