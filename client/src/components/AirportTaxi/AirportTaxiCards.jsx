import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { BsFillPersonFill, BsCheck } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FaSuitcase } from "react-icons/fa";

export default function AirportTaxiCards({
  type,
  vehicle,
  passengers,
  bags,
  included,
  cancellation,
  reference,
}) {
  function handleScroll() {
    window.scroll({
      behavior: "smooth",
    });
  }
     

  // console.log(reference.current);
  return (
    <Box p="4" border="1px" borderColor="black" minW="xs">
      <Box py="4">
        <Heading as="h2" size="sm">
          {type}
        </Heading>
        <Text fontSize="sm">{vehicle}</Text>
      </Box>
      <VStack align="start" p="2">
        <HStack>
          <Box>
            <BsFillPersonFill size="1rem" />
          </Box>
          <Box>{passengers}</Box>
        </HStack>

        <HStack>
          <Box>
            <FaSuitcase size="1rem" />
          </Box>
          <Box>{bags}</Box>
        </HStack>
        <HStack>
          <Box>
            <HiOutlineCheckCircle size="1rem" color="#4299e1" />
          </Box>
          <Box color="blue.400">{included}</Box>
        </HStack>
        <HStack>
          <Box>
            <BsCheck size="1rem" color="#008000" />
          </Box>
          <Box color="green">{cancellation}</Box>
        </HStack>
      </VStack>
      <Button
        variant="solid"
        colorScheme="telegram"
        w="16"
        h="8"
        onClick={handleScroll}
      >
        Search
      </Button>
    </Box>
  );
}
