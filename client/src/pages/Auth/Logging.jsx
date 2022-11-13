import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading, Image, Input,
  Link,
  Stack, useToast
} from "@chakra-ui/react";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import { isAuth } from "../../redux/auth/auth.actions";
const obj = {
  email: "",
  password: "",
};
const Logging = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [text, setText] = useState(obj);
  
  
  const handleChange = (e) => {
    // console.log(e.target);
    const {name, value} = e.target;
    setText({...text, [name]: value});
  };

  const {email, password} = text;

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      setLoad(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setLoad(false);

          // const user = res.user;
          // console.log(user);

          toast({
            title: "Logged in",
            position: "top-right",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          dispatch(isAuth());
          navigate("/");
        })
        .catch((err) => {
          setLoad(false);
          console.log(err);
          toast({
            title: "Wrong Email or Password",
            position: "top-right",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        });

      setText(obj);
    } else {
      toast({
        title: "Input fields first",
        position: "top-right",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack direction={{base: "column", md: "row"}}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={handleChange}
              value={email}
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              onChange={handleChange}
              value={password}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{base: "column", sm: "row"}}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              disabled={load}
              onClick={handleSubmit}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          laoding="lazy"
          objectFit={"cover"}
          borderRadius={"2rem"}
          w={"90%"}
          mt={3}
          src={
            "https://img.freepik.com/premium-vector/secure-login-sign-up-concept-illustration-user-use-secure-login-password-protection-website-social-media-account-vector-flat-style_7737-2270.jpg?w=900"
          }
        />
      </Flex>
    </Stack>
  );
};
export default Logging;
