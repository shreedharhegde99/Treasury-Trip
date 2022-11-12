import { Box, Hide } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { AiFillCar } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";
import { FaPlaceOfWorship, FaTaxi } from "react-icons/fa";
import NavbarButton from "./NavbarButton";

const NavbarR = () => {
  const [active, setActive] = useState("stays");
  const { pathname } = useLocation();
  useEffect(() => {
    setActive(pathname.split("/").join(""));
  }, [pathname]);

  return (
    <>
      <Hide breakpoint="(max-width: 1000px)">
        <Box bg="teal.800" color={"white"}>
          <Box
            w={"70%"}
            pb="15px"
            m="auto"
            fontSize={["sm", "sm", "md"]}
            display="flex"
            justifyContent="center"
            gap={20}
          >
            <NavbarButton
              active={active}
              text="Stays"
              link="stays"
              icon={<IoIosBed />}
            />
            <NavbarButton
              active={active}
              text="Flights"
              link="flights"
              icon={<MdFlightTakeoff />}
            />
            <NavbarButton
              active={active}
              text="Car Rentals"
              link="car-rentals"
              icon={<AiFillCar />}
            />
            <NavbarButton
              active={active}
              text="Attractions"
              link="attractions"
              icon={<FaPlaceOfWorship />}
            />
            <NavbarButton
              active={active}
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
