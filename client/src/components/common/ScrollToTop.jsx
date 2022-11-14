import { Box, Tooltip } from "@chakra-ui/react";
import { RiArrowUpSLine } from "react-icons/ri";

export default function ScrollToTop() {
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",

    });
  };
  return (
    <Tooltip label="Go to top">
      <Box
        p="3"
        bg="white"
        borderRadius="full"
        shadow="dark-lg"
        position="fixed"
        bottom="20"
        right="12"
        cursor="pointer"
        zIndex="10"
        onClick={scrollTop}
      >
        <RiArrowUpSLine size="1.6rem" />
      </Box>
    </Tooltip>
  );
}
