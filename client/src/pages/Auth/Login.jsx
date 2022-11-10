import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import Medium from "./Medium";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Box>
        <Box
          p="20px 0px"
          // border="1px solid"
          w={["100%", "70%", "70%", "35%"]}
          m="auto"
          mt={[1,2,4,10]}
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          textAlign={"center"}
        >
          <Heading fontSize={25} mb={4}>
            Sign in or create an account
          </Heading>
          <Box m={"auto"} w={["100","60%"]}>
            <Input type="text" mb={3} placeholder="Enter email" />
            <InputGroup size="md">
              <Input
                border={"1px solid black"}
                pr="4.5rem"
                type={show ? "text" : "password"}
                mb={2}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button border="2px solid teal" mb={5}>Login</Button>
          </Box>

          <Medium />
        </Box>
      </Box>
    </>
  );
};

export default Login;
