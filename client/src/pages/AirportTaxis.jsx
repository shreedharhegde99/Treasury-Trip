import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { GrCreditCard } from "react-icons/gr";
import { RiPlaneFill } from "react-icons/ri";

import images from "../assets/airportTaxi.json";
import AirportTransfers from "../components/AirportTaxi/AirportTransfers";
import AirportTaxiCards from "../components/AirportTaxi/AirportTaxiCards";
import TaxiFaq from "../components/AirportTaxi/TaxiFaq";

const { how_it_works, taxi, driver, destination } = images;
export default function AirportTaxi() {
  const [trip, setTrip] = useState("oneway");
  const [hr, setHr] = useState("");
  const [min, setMin] = useState("");
  const [passengers, setPassengers] = useState(1);
  return (
    <Fragment>
      <Box p="4">
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton w="full">
              <Flex w="full" justify="space-between">
                <Text>Protecting you during COVID-19</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
            <AccordionPanel>
              <Box>
                Your safety matters. From July 2020, we’re asking all customers
                to wear a face covering when travelling with us. If you don’t
                wear a face covering, your driver may not be able to start your
                journey. Where Coronavirus may affect your plans, here’s what
                you need to know about booking with us at this time.
              </Box>
              <Box>Read more</Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      {/* Taxi search section */}
      <Box p="4">
        <Box>
          <Heading as="h2" size="md" p="2">
            Book your airport taxi
          </Heading>
          <Text p="2">
            Easy airport transfers to and from your accommodation
          </Text>
        </Box>
        <Box p="2">
          <RadioGroup onChange={setTrip} value={trip}>
            <HStack gap="">
              <Radio value="oneway">One-way</Radio>
              <Radio value="round">Round-Trip</Radio>
            </HStack>
          </RadioGroup>
        </Box>
      </Box>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(5,1fr)",
        }}
        p="4"
      >
        <GridItem
          w="full"
          p="2"
          borderX="4px"
          borderY="2px"
          borderColor="yellow.400"
        >
          <HStack>
            <Box>
              <MdLocationOn />
            </Box>
            <Box>
              <Input
                type="text"
                variant="outline"
                border="none"
                placeholder="Enter pick-up location"
              />
            </Box>
          </HStack>
        </GridItem>
        <GridItem
          w="full"
          p="2"
          borderX="4px"
          borderY="2px"
          borderColor="yellow.400"
        >
          <HStack>
            <Box>
              <MdLocationOn />
            </Box>
            <Box>
              <Input
                type="text"
                variant="outline"
                border="none"
                placeholder="Enter destination"
              />
            </Box>
          </HStack>
        </GridItem>
        <GridItem
          w="full"
          p="2"
          borderX="4px"
          borderY="2px"
          borderColor="yellow.400"
        >
          <Input type="date" w="full" />
        </GridItem>
        <GridItem w="full" borderX="4px" borderColor="yellow.400" h="full">
          <Grid templateColumns={"repeat(2,1fr)"} h="full">
            <HStack
              border="2px"
              borderColor="yellow.400"
              h="full"
              p="3"
              flexGrow="1"
            >
              <Box>
                <AiOutlineClockCircle />
              </Box>
              <Flex>
                <Box>{hr}</Box>
                <Box>{min}</Box>
              </Flex>
            </HStack>
            <HStack w="full" border="2px" borderColor="yellow.400" h="100%">
              <Box>
                <BsPersonFill />
              </Box>
              <Select placeholder="Passengers" w="full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </HStack>
          </Grid>
        </GridItem>
        <GridItem
          // w="full"
          borderX="4px"
          borderY="2px"
          borderColor="yellow.400"
          textAlign="center"
          colSpan={{ sm: "2", lg: "1" }}
        >
          <Button
            w={{ base: "full", md: "xs" }}
            variant="solid"
            colorScheme="telegram"
            h={{ base: "10", lg: "full" }}
          >
            Search
          </Button>
        </GridItem>
      </Grid>
      {/* Details section */}

      <Stack
        p="4"
        direction={{ base: "column", lg: "row" }}
        spacing="6"
        justify={{ md: "center" }}
      >
        <HStack align="start" spacing="6">
          <Box borderRadius={"50%"} bgColor="blue.50" p="2">
            <RiPlaneFill size="1.5rem" />
          </Box>
          <Box>
            <Heading as="h3" size="xs">
              Flight tracking
            </Heading>
            <Text color="gray.600">
              If your flight's delayed, your driver will wait
            </Text>
          </Box>
        </HStack>
        <HStack align="start" spacing="6">
          <Box borderRadius={"50%"} bgColor="red.100" p="2">
            <GrCreditCard size="1.5rem" />
          </Box>
          <Box>
            <Heading as="h3" size="xs">
              One clear price
            </Heading>
            <Text color="gray.600">No extra fees, no cash required</Text>
          </Box>
        </HStack>

        <HStack align="start" spacing="6">
          <Box borderRadius={"50%"} bgColor="blue.50" p="2">
            <GoCheck size="1.5rem" />
          </Box>
          <Box>
            <Heading as="h3" size="xs">
              Tried and trusted
            </Heading>
            <Text color="gray.600">
              Professional drivers and 24/7 customer care
            </Text>
          </Box>
        </HStack>
      </Stack>

      {/*    Airport transfers made easy*/}
      <VStack justify={{ md: "center" }} py="20">
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
              />
            </GridItem>
          </Grid>
        </Show>
      </Box>

      <TaxiFaq/>
    </Fragment>
  );
}
