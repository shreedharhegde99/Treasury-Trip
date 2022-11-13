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
    <Stack  direction={{base: "column", md: "row"}}>
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
          alt={"Login Image"}
          objectFit={"cover"}
                  
                  mt={3}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};
export default Logging;
