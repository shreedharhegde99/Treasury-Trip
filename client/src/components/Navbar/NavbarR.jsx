import { Box, Hide } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaPlaceOfWorship, FaTaxi } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { MdFlightTakeoff } from "react-icons/md";
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
        <Box bg="#00224F" color={"white"}>
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
              link=""
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
