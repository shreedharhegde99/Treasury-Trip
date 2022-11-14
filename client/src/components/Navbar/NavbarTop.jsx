import {Box, Button, Heading, Hide, Show, Text} from "@chakra-ui/react";
import {googleLogout} from "@react-oauth/google";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {isNotAuth} from "../../redux/auth/auth.actions";
import MenuBar from "../Chakra Comp/Menu";
import Flag from "../Flag_Currency/Flag";
export const NavbarTop = () => {
  const {login} = useSelector((store) => store.Authentication);
  let changingBtn;
  login ? (changingBtn = "Logout") : (changingBtn = "Login");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (changingBtn === "Logout") {
      dispatch(isNotAuth());
      googleLogout();
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Box
        // border={"1px solid"}
        display="flex"
        bg="#00224F"
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
          <Link to="/">
            {" "}
            <Heading fontSize={[18, 21]} fontFamily={"monospace"}>
              {" "}
              Treasury Trip
            </Heading>
          </Link>
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
            <Text fontSize={["md"]}>INR</Text>
            <Flag />
          </Box>
          <Hide breakpoint="(max-width: 1024px)">
            <Button
              color={"black"}
              bg="whitesmoke"
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

            <Button onClick={handleClick} color={"black"}>
              {changingBtn}
            </Button>
          </Hide>
        </Box>
        <Show breakpoint="(max-width: 600px)">
          <Box display="flex" alignItems="center">
            <MenuBar />
          </Box>
        </Show>
      </Box>
    </>
  );
};
