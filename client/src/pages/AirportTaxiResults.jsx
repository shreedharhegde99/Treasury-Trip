import { Fragment, useState } from "react";
import { Box, Button, Flex, HStack, Show, Text } from "@chakra-ui/react";
import CoronaAlert from "../components/AirportTaxi/CoronaAlert";
import PassengerBookingDetails from "../components/AirportTaxi/PassengerBookingDetails";
import PassengerDetails from "../components/AirportTaxi/PassengerDetails";

export default function AirportTaxiResults() {
// const initData = {

// }

  return (
    <Fragment>
      <Show below="md">
        <Box>
          <HStack p="4" bg="blue.100" justify="space-between">
            <Box>
              <Text fontSize="md" fontWeight="semibold">
                Enter Your Details
              </Text>
            </Box>
            <Box>
              <Text>Step 1 of 2</Text>
            </Box>
          </HStack>
        </Box>
      </Show>
      <CoronaAlert />

      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW={{ xl: "container.lg" }}
          justify={{ md: "center" }}
          m={{ xl: "auto" }}
        >
          <PassengerBookingDetails />
          <PassengerDetails />
        </Flex>
      </Box>
      <Show below="md">
        <Box
          p="4"
          boxShadow="dark-lg"
          position="fixed"
          bottom="0px"
          bg="white"
          w="full"
        >
          <Text py="4" fontWeight="semibold" fontSize="2xl">
            Rs. 100
          </Text>
          <Box>
            <Button
              w="full"
              h="12"
              variant="solid"
              colorScheme="telegram"
              color="white"
            >
              Continue to book
            </Button>
          </Box>
        </Box>
      </Show>
    </Fragment>
  );
}
