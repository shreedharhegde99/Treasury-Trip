import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Show,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import AirportTaxiCards from "./AirportTaxiCards";

export default function AirportTaxiKinds({ reference }) {
  const [passengers, setPassengers] = useState(1);

  return (
    <Fragment>
      <Box px="4" py="6">
        <Box textAlign={{ md: "center" }}>
          <Heading as="h2" size={{ base: "sm", md: "lg" }} py="6">
            Airport taxis for any kind of trip
          </Heading>
        </Box>
        <Show below="md">
          <Flex overflow="scroll" gap="6">
            <AirportTaxiCards
              type="Standard"
              vehicle="Skoda octavia or similar"
              passengers=" 3 passengers"
              bags="2 standard bags"
              included="Meet & Greet included"
              cancellation="Free cancellation"
            />
            <AirportTaxiCards
              type="Executive"
              vehicle="Mercedes-benz E-Class or similar"
              passengers=" 3 passengers"
              bags="2 standard bags"
              included="Meet & Greet included"
              cancellation="Free cancellation"
            />
            <AirportTaxiCards
              type="People carrier"
              vehicle="Peugeot 5008 or similar"
              passengers=" 5 passengers"
              bags="5 standard bags"
              included="Meet & Greet included"
              cancellation="Free cancellation"
            />
            <AirportTaxiCards
              type="Executive people carrier"
              vehicle="Mercedes Benz V-Class or similar"
              passengers=" 6 passengers"
              bags="6 standard bags"
              included="Meet & Greet included"
              cancellation="Free cancellation"
            />
            <AirportTaxiCards
              type="Large people carrier"
              vehicle="Ford Tourneo or similar"
              passengers=" 7 passengers"
              bags="7 standard bags"
              included="Meet & Greet included"
              cancellation="Free cancellation"
            />
          </Flex>
        </Show>
        <Show above="md">
          <Box maxW="container.lg" m="auto">
            <HStack py="6">
              <Box
                bg={`${passengers === 1 ? "blue" : "white"}`}
                color={`${passengers === 1 ? "white" : "blue"}`}
                border="1px"
                borderColor="blue.300"
                p="2"
                onClick={() => setPassengers(1)}
                cursor="pointer"
              >
                1-3 passengers
              </Box>
              <Box
                bg={`${passengers === 3 ? "blue" : "white"}`}
                color={`${passengers === 3 ? "white" : "blue"}`}
                border="1px"
                borderColor="blue.300"
                p="2"
                onClick={() => setPassengers(3)}
                cursor="pointer"
              >
                4-7 passengers
              </Box>
              <Box
                bg={`${passengers === "all" ? "blue" : "white"}`}
                color={`${passengers === "all" ? "white" : "blue"}`}
                border="1px"
                borderColor="blue.300"
                p="2"
                onClick={() => setPassengers("all")}
                cursor="pointer"
              >
                All taxis
              </Box>
            </HStack>
            <Grid templateColumns="repeat(2,1fr)" gap="10">
              <GridItem
                display={`${
                  passengers === 1 || passengers === "all" ? "content" : "none"
                }`}
              >
                <AirportTaxiCards
                  type="Standard"
                  vehicle="Skoda octavia or similar"
                  passengers=" 3 passengers"
                  bags="2 standard bags"
                  included="Meet & Greet included"
                  cancellation="Free cancellation"
                  reference={reference}
                />
              </GridItem>
              <GridItem
                display={`${
                  passengers === 1 || passengers === "all" ? "content" : "none"
                }`}
              >
                <AirportTaxiCards
                  type="Executive"
                  vehicle="Mercedes-benz E-Class or similar"
                  passengers=" 3 passengers"
                  bags="2 standard bags"
                  included="Meet & Greet included"
                  cancellation="Free cancellation"
                  reference={reference}
                />
              </GridItem>
              <GridItem
                display={`${
                  passengers === 3 || passengers === "all" ? "content" : "none"
                }`}
              >
                <AirportTaxiCards
                  type="People carrier"
                  vehicle="Peugeot 5008 or similar"
                  passengers=" 5 passengers"
                  bags="5 standard bags"
                  included="Meet & Greet included"
                  cancellation="Free cancellation"
                  reference={reference}
                />
              </GridItem>
              <GridItem
                display={`${
                  passengers === 3 || passengers === "all" ? "content" : "none"
                }`}
              >
                <AirportTaxiCards
                  type="Executive people carrier"
                  vehicle="Mercedes Benz V-Class or similar"
                  passengers=" 6 passengers"
                  bags="6 standard bags"
                  included="Meet & Greet included"
                  cancellation="Free cancellation"
                  reference={reference}
                />
              </GridItem>
              <GridItem
                display={`${
                  passengers === 3 || passengers === "all" ? "content" : "none"
                }`}
              >
                <AirportTaxiCards
                  type="Large people carrier"
                  vehicle="Ford Tourneo or similar"
                  passengers=" 7 passengers"
                  bags="7 standard bags"
                  included="Meet & Greet included"
                  cancellation="Free cancellation"
                  reference={reference}
                />
              </GridItem>
            </Grid>
          </Box>
        </Show>
      </Box>
    </Fragment>
  );
}
