import { Box } from "@chakra-ui/react";
import NavbarR from "./NavbarR";
import { NavbarTop } from "./NavbarTop";

export default function Navbar() {
  return (
    <Box position="sticky" top="0" zIndex="4">
      <NavbarTop />
      <NavbarR />
    </Box>
  );
}
