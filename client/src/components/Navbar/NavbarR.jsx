import { Box, Hide } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";
import { FaPlaceOfWorship, FaTaxi } from "react-icons/fa";
import NavbarButton from "./NavbarButton";
const NavbarR = () => {
  const [active, setActive] = useState("stays");
  const handleActive = (val) => {
    setActive(val);
    console.log(val);
  };

  return (
    <>
      <Hide breakpoint="(max-width: 1000px)">
        <Box bg="teal.800" color={"white"}>
          <Box
            w={"70%"}
            pb="15px"
            m="auto"
            fontSize={["sm", "sm", "md"]}
            // border={"1px solid"}
            display="flex"
            justifyContent="center"
            gap={20}
          >
            <NavbarButton
              active={active}
              setActive={handleActive}
              text="Stays"
              link="stays"
              icon={<IoIosBed />}
            />
            <NavbarButton
              active={active}
              setActive={handleActive}
              text="Flights"
              link="flights"
              icon={<MdFlightTakeoff />}
            />
            <NavbarButton
              active={active}
              setActive={handleActive}
              text="Car Rentals"
              link="car-rentals"
              icon={<AiFillCar />}
            />
            <NavbarButton
              active={active}
              setActive={handleActive}
              text="Attractions"
              link="attractions"
              icon={<FaPlaceOfWorship />}
            />
            <NavbarButton
              active={active}
              setActive={handleActive}
              text="Airport+Taxis"
              link="taxis"
              icon={<FaTaxi />}
            />
          </Box>
        </Box>
      </Hide>
    </>
  );
};

export default NavbarR;