import {Box, Hide} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
import {IoIosBed} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {MdFlightTakeoff} from "react-icons/md";
import {FaPlaceOfWorship, FaTaxi} from "react-icons/fa";
const NavbarR = () => {
  return (
    <>
      <Hide breakpoint="(max-width: 1000px)">
        <Box _focus={{border: "2px solid"}} bg="teal.800" color={"white"}>
          <Box
            w={"70%"}
            pb="15px"
            m="auto"
            fontSize={["sm", "sm", "md"]}
            // border={"1px solid"}
            display="flex"
            gap={20}
          >
            <Box
              display={"flex"}
              alignItems="center"
              //   _focus={{border: "2px solid"}}
              //   _active={{border: "2px solid"}}
              //   _highlighted={{border: "2px solid"}}
              //   _expanded={{border: "2px solid"}}
            //   _checked={{border: "2px solid"}}
              gap={2}
            >
              <IoIosBed />
              <Link to="/stays">Stays</Link>
            </Box>
            <Box display={"flex"} alignItems="center" gap={2}>
              <MdFlightTakeoff />
              <Link to="/flights">Flights</Link>
            </Box>
            <Box display={"flex"} alignItems="center" gap={2}>
              <AiFillCar />
              <Link to="carRentals">Car Rentals</Link>
            </Box>
            <Box display={"flex"} alignItems="center" gap={2}>
              <FaPlaceOfWorship />
              <Link to="/attractions">Attractions</Link>
            </Box>
            <Box display={"flex"} alignItems="center" gap={2}>
              {" "}
              <FaTaxi />
              <Link to="/taxis">Airport+Taxis</Link>
            </Box>
          </Box>
        </Box>
      </Hide>
    </>
  );
};

export default NavbarR;
