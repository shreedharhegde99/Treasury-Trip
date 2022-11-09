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
    <Fragment>
      <Box p="4" border="1px" borderColor="black" w="max-content">
        <Box>
          <Heading as="h2" size="sm">
            {type}
          </Heading>
          <Text>{vehicle}</Text>
        </Box>
        <Box>
          <HStack>
            <Box>
              <BsFillPersonFill />
            </Box>
            <Box>{passengers}</Box>
          </HStack>

          <HStack>
            <Box>
              <FaSuitcase />
            </Box>
            <Box>{bags}</Box>
          </HStack>
          <HStack>
            <Box>
              <HiOutlineCheckCircle />
            </Box>
            <Box>{included}</Box>
          </HStack>
          <HStack>
            <Box>
              <BsCheck />
            </Box>
            <Box>{cancellation}</Box>
          </HStack>
          <Button variant="solid" colorScheme="telegram" w="16" h="8">Search</Button>
        </Box>
      </Box>
    </Fragment>
  );
}
