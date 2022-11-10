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
} from "@chakra-ui/react";
import {EditIcon, HamburgerIcon, UnlockIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import {IoIosBed} from "react-icons/io";
import {MdFlightTakeoff} from "react-icons/md";
import {FaPlaceOfWorship, FaTaxi} from "react-icons/fa";

const MenuBar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button
        as={IconButton}
        icon={<HamburgerIcon />}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent color={"white"} bg="teal.700">
          <DrawerHeader display={"flex"} gap="20px" borderBottomWidth="3px">
            Treasury Trip
            <Link to="login">
              {" "}
              <Button bg={"teal.700"} color={"white"} outlineColor={"white"}>
                <UnlockIcon color={"white"} mr={2} />
                Login
              </Button>
            </Link>
            <Link to="register">
              <Button color={"white"} bg={"teal.700"} outlineColor={"white"}>
                <EditIcon color={"white"} mr={2} />
                Register
              </Button>
            </Link>
          </DrawerHeader>
          <DrawerBody p={3} display={"flex"} justifyContent="space-between">
            <Link to="/stays">
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
