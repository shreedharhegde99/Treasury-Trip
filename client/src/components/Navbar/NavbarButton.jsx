import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavbarButton({ active, setActive, text, icon, link }) {
  return (
    <Link to={`/${link}`}>
      <Box
        border="2px"
        borderColor={`${active === link ? "white" : "teal"}`}
        borderRadius="full"
        p="2"
        minW="max-content"
      >
        <Flex gap="2" align="center">
          {icon}
          <Text>{text}</Text>
        </Flex>
      </Box>
    </Link>
  );
}
