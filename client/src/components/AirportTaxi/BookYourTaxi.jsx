import {
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
import { Fragment, useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
// import { BsPersonFill } from "react-icons/bs";
import { RiPlaneFill } from "react-icons/ri";
import { GrCreditCard } from "react-icons/gr";
import { GoCheck } from "react-icons/go";
import CoronaAlert from "./CoronaAlert";
import timeData from "../../assets/time.json";
import {
  resetTaxiData,
  updateTravelData,
} from "../../redux/taxis/taxis.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BookYourTaxi() {
  const [trip, setTrip] = useState("oneway");
  const initData = {
    from: "",
    to: "",
    date: "",
    hours: "12",
    mins: "00",
  };
  const [data, setData] = useState(initData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSearch = () => {
    const { from, to, date, hours, mins } = data;
    if (from && to && date && hours && mins) {
      dispatch(updateTravelData(data));
      setData(initData);
      console.log(from, to, date, hours, mins);
      navigate("taxi-search");
    }

    return;
  };
  useEffect(() => {
    dispatch(resetTaxiData());
  }, []);

  // console.log(data);
  return (
    <Fragment>
      <CoronaAlert />
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
          lg: "repeat(5,1fr)",
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
                value={data.from}
                onChange={handleChange}
                name="from"
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
                value={data.to}
                onChange={handleChange}
                name="to"
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
          <Input
            type="date"
            w="full"
            value={data.date}
            onChange={handleChange}
            name="date"
          />
        </GridItem>
        <GridItem w="full" borderX="4px" borderColor="yellow.400" h="full">
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
            <Flex w="full">
              <Box w="full">
                <Select value={data.hours} onChange={handleChange} name="hours">
                  {timeData.hours.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box w="full">
                <Select value={data.mins} onChange={handleChange} name="mins">
                  {timeData.minutes.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </HStack>
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
            onClick={handleSearch}
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
