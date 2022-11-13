import {
  Box,
  Button,
  Heading,
  Hide,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../../Firebase/firebase";
import Medium from "./Medium";

const obj = {
  email: "",
  password: "",
};
const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const [load, setLoad] = useState(false);
  const [text, setText] = useState(obj);
  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    // console.log(e.target);
    const {name, value} = e.target;
    setText({...text, [name]: value});
  };

  const {email, password} = text;

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      setLoad(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setLoad(false);

          // const user = res.user;
          // console.log(user);

          toast({
            title: "Register Success",
            position: "top-right",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          navigate("/login");
        })
        .catch((err) => {
          setLoad(false);
          toast({
            title: "Email is already in use",
            position: "top-right",
            status: "error",
            duration: 5000,
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
    <>
      <Box
        // border={"1px solid"}
        bg="#FAFAFA"
        m="auto"
        display={"flex"}
        flexDir={["column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <Box
        
          p="20px 0px"
          w={["100%", "70%", "70%", "45%"]}
          mt={[1, 2, 4, 10]}
          display="flex"
          flexDir={"column"}
          alignItems="center"
          textAlign={"center"}
        justifyContent="center"
          bg="whiteAlpha.700"
          // border={"1px solid"}
          borderRadius={7}
        >
          <Heading fontSize={25} mb={4}>
            Create an account
          </Heading>
          <Box m={"auto"} w={["100", "60%"]}>
            <Input
              onChange={handleChange}
              type="text"
              mb={3}
              value={email}
              border="2px solid"
              name="email"
              placeholder="Enter email"
            />
            <InputGroup size="md">
              <Input
                name="password"
                onChange={handleChange}
                value={password}
                border={"2px solid"}
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
            <Button
              w={"100%"}
              disabled={load}
              onClick={handleSubmit}
              border="2px solid teal"
              mb={5}
              mt={5}
            >
              Register
            </Button>
          </Box>

          <Medium />
        </Box>
        <Box>
          <Hide breakpoint="(max-width: 600px)">
            <Image
              // objectFit={"cover"}

              src="https://img.freepik.com/free-photo/what-are-you-waiting-sign-up-now-confident-determined-happy-friendlylooking-attractive-woman-yellow-tshirt-pointing-upper-left-corner-advice-buy-black-friday-sale-smiling-pleased_176420-50940.jpg?w=1060&t=st=1668331858~exp=1668332458~hmac=baaa0c243e3a6203272bc319875fdf0b7e67b4a9d347a7281a0743cb05d1e720"
            />
          </Hide>
        </Box>
      </Box>
    </>
  );
};

export default Register;
