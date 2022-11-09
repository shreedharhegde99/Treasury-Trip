import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
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
}) {
  return (
      <Box p="4" border="1px" borderColor="black" minW="sm">
        <Box>
          <Heading as="h2" size="md">
            {type}
          </Heading>
          <Text>{vehicle}</Text>
        </Box>
        <Box>
          <HStack>
            <Box>
              <BsFillPersonFill size="1.5rem" />
            </Box>
            <Box>{passengers}</Box>
          </HStack>

          <HStack>
            <Box>
              <FaSuitcase size="1.5rem"  />
            </Box>
            <Box>{bags}</Box>
          </HStack>
          <HStack>
            <Box>
              <HiOutlineCheckCircle size="1.5rem"  />
            </Box>
            <Box>{included}</Box>
          </HStack>
          <HStack>
            <Box>
              <BsCheck size="1.5rem"  />
            </Box>
            <Box>{cancellation}</Box>
          </HStack>
          <Button variant="solid" colorScheme="telegram" w="16" h="8">Search</Button>
        </Box>
      </Box>
  );
}
