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
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPersonFill, BsInfoCircle } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { GrCreditCard } from "react-icons/gr";
import { GoCheck } from "react-icons/go";

export default function BookYourTaxi() {
  const [trip, setTrip] = useState("oneway");
  const [hr, setHr] = useState("");
  const [min, setMin] = useState("");
  return (
    <Fragment>
      <Box p="4" maxW="container.lg" m="auto">
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton w="full">
              <Flex w="full" justify="space-between">
                <Stack direction="row" align="center">
                  <BsInfoCircle color="red" />
                  <Text>Protecting you during COVID-19</Text>
                </Stack>
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
      <Box p="4" maxW="container.lg" m="auto">
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
          lg: "repeat(3,1fr) 2fr 1fr",
        }}
        p="4"
        maxW="container.lg"
        m="auto"
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
            w={{ base: "full", md: "xs", lg: "40" }}
            variant="solid"
            colorScheme="telegram"
            h={{ base: "10", lg: "full" }}
          >
            Search
          </Button>
        </GridItem>
      </Grid>
      <Stack
        p={{ base: "4", lg: "10" }}
        direction={{ base: "column", lg: "row" }}
        spacing="6"
        justify={{ md: "center" }}
        maxW="container.lg"
        m="auto"
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
    </Fragment>
  );
}
