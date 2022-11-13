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
          </DrawerHeader>
          <DrawerBody p={3} display={"flex"} justifyContent="space-between">
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
