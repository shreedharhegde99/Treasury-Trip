import React from "react";
import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import {EditIcon, HamburgerIcon, UnlockIcon} from "@chakra-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {IoIosBed} from "react-icons/io";
import {MdFlightTakeoff} from "react-icons/md";
import {FaPlaceOfWorship, FaTaxi} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {isNotAuth} from "../../redux/auth/auth.actions";

const MenuBar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {login} = useSelector((store) => store.Authentication);
  let changingBtn;
  {
    login ? (changingBtn = "Logout") : (changingBtn = "Login");
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (changingBtn === "Logout") {
      dispatch(isNotAuth());
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Button
        as={IconButton}
        icon={<HamburgerIcon />}
        bg="#00224F"
        fontSize={20}
        border={"0.5px solid"}
        p={7}
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent p={2} color={"white"} bg="teal.700">
          <DrawerHeader
            display={"flex"}
            justifyContent="space-around"
            p={5}
            borderBottomWidth="3px"
            mb={1}
          >
            <Box>
              <Heading>Treasury Trip</Heading>
            </Box>
            <Box display={"flex"} gap={10}>
              <Button
                onClick={handleClick}
                bg={"teal.700"}
                color={"white"}
                outlineColor={"white"}
              >
                <UnlockIcon color={"white"} mr={2} />
                {changingBtn}
              </Button>
              <Link to="register">
                <Button color={"white"} bg={"teal.700"} outlineColor={"white"}>
                  <EditIcon color={"white"} mr={2} />
                  Register
                </Button>
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody p={3} display={"flex"} justifyContent="space-around">
            <Link to="/">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                <IoIosBed />
                Stays
              </Box>
            </Link>
            <Link to="/flights">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                <MdFlightTakeoff />
                Flights
              </Box>
            </Link>
            <Link to="/attractions">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                <FaPlaceOfWorship />
                Attractions
              </Box>
            </Link>
            <Link to="/taxis">
              <Box display={"flex"} flexDir="column" alignItems={"center"}>
                <FaTaxi />
                Airport+Taxi
              </Box>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuBar;
