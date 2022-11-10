import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { Fragment } from "react";

import images from "../../assets/airportTaxi.json";
import AirportTransfers from "./AirportTransfers";

const { how_it_works, taxi, driver, destination } = images;

export default function AirportTransferDetail() {
  return (
    <Fragment>
      <VStack justify={{ md: "center" }} py="20" maxW="container.lg" m="auto">
        <Box p="4">
          <Heading as="h3" size={{ base: "sm", md: "lg" }} py="10">
            Airport transfers made easy
          </Heading>
        </Box>
        <Flex
          p="4"
          direction={{ base: "column", lg: "row" }}
          gap={{ lg: "40" }}
        >
          <VStack spacing={{ base: "6", lg: "20" }} maxW={{ lg: "50%" }}>
            <AirportTransfers
              logo={taxi}
              title="Booking your airport taxi"
              details="Confirmation is immediate. If your plans change, you can cancel for
          free up to 24 hours before your scheduled pick-up time taxi"
            />
            <AirportTransfers
              logo={driver}
              title="Meeting your driver"
              details="  You'll be met on arrival and taken to your vehicle. Your driver
            will track your flight, so they'll wait for you even if it's
            delayed"
            />
            <AirportTransfers
              logo={destination}
              title=" Arriving at your destination"
              details="  Get to your destination quickly and safely – no waiting in line
            for a taxi, no figuring out public transport"
            />
          </VStack>

          <Flex py={{ base: "8", lg: "0px" }} justify="center">
            <Box pos="relative">
              <Image src={how_it_works} alt="Booking airport taxi" />
              <Box
                pos="absolute"
                top="0px"
                left="0px"
                bgColor="gray.300"
                p="2"
                borderRadius="lg"
              >
                How does it work?
              </Box>
              <Box pos="absolute" top="140px" left="50px">
                Book online
              </Box>
              <Box
                pos="absolute"
                top="140px"
                left="175px"
                maxW="24"
                textAlign="center"
              >
                Receive confirmation
              </Box>
              <Box
                pos="absolute"
                top="300px"
                left="50px"
                maxW="24"
                textAlign="center"
              >
                Arrive at your destination
              </Box>
              <Box pos="absolute" top="300px" left="175px" textAlign="center">
                Meet your driver
              </Box>
              <Box pos="absolute" top="410px" left="-10px">
                Enjoy your trip
              </Box>
            </Box>
          </Flex>
        </Flex>
      </VStack>
    </Fragment>
  );
}
