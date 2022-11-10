import {Box, HStack, Text} from "@chakra-ui/react";
import React from "react";
import {AiFillFacebook, AiFillGoogleCircle, AiFillMobile} from "react-icons/ai";
const Medium = () => {
  return (
    <>
      <Box>
        <Box>
          <Text as={"sup"}>
            or use one of these options
          </Text>
        </Box>
        <Box w={"50%"} m="auto" display={"flex"} justifyContent="center">
          <HStack spacing="24px">
            <Box
              display={"flex"}
              boxShadow="md"
              _hover={{border: "1px solid"}}
              p={4}
            >
              <AiFillFacebook fontSize={40} />
            </Box>
            <Box
              display={"flex"}
              boxShadow="md"
              _hover={{border: "1px solid"}}
              p={4}
            >
              <AiFillGoogleCircle fontSize={40} />
            </Box>
            <Box
              display={"flex"}
              boxShadow="md"
              _hover={{border: "1px solid"}}
              p={4}
            >
              <AiFillMobile fontSize={40} />
            </Box>
          </HStack>
        </Box>
        <Text mt={4} p={3} borderBottomWidth="3px" fontWeight={500}>
          more ways to sign-in
        </Text>
      </Box>
    </>
  );
};

export default Medium;
