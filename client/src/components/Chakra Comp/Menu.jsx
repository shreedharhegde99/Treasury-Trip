import React from 'react'
import {
   Menu,
    MenuButton,
    MenuList,
    MenuItem, IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"
const MenuBar = () => {
  return (
      <>
          <Menu >
              <MenuButton
                  bg="transparent"
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  _hover={{
                      background: "transparent",
                      borderColor: "teal",
                  }}
              />
              <MenuList bg="teal" color={"white"}>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>Login</MenuItem>
                  <MenuItem>Flights</MenuItem>
                  <MenuItem>Car</MenuItem>
                  <MenuItem>List your Property</MenuItem>
              </MenuList>
          </Menu>
          </>
  )
}

export default MenuBar
