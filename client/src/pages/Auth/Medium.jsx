import { Box, HStack, Text, useToast } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { AiFillFacebook, AiFillGoogleCircle, AiFillMobile } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../redux/auth/auth.actions";
const Medium = () => {
  const {login} = useSelector((state) => state.Authentication);
  console.log(login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const loging = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      toast({
        title: "Logged in successfully",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(isAuth());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: () => {
      toast({
        title: "Login failed",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Box>
        <Box>
          <Text as={"sup"}>or use one of these options</Text>
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
              <AiFillGoogleCircle onClick={() => loging()} fontSize={40} />
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
        <Box
          w={"80%"}
          m="auto"
          fontSize={13}
          p={"30px 0"}
          borderBottomWidth="3px"
        >
          <Text>
            By signing in or creating an account, you agree with our Terms &
            Conditions and Privacy Statement
          </Text>
        </Box>
        <Box w={"70%"} m="auto" fontSize={13}>
          <Text>All rights reserved.</Text>
          <Text> Copyright (2006-2022) – Treasury Trip.com™</Text>
        </Box>
      </Box>
    </>
  );
};

export default Medium;
