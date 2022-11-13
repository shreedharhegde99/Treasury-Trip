import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Select,
  Show,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import data from "../../assets/airportTaxi.json";
import carDetails from "../../assets/carDetails.json";
import CarDetailCards from "./CarDetailCards";

import { GiBackwardTime } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";
import { IoMdThumbsUp } from "react-icons/io";
import { useState } from "react";

export default function PassengerDetails() {
  const [selected, setSelected] = useState("Standard");

  function handleSelect(val) {
    setSelected(val);
  }
  return (
    <Box w={{ md: "lg", lg: "2xl" }} mb={{ base: "48", md: "1" }}>
      <Box>
        <Box>
          <HStack align="start">
            <Box>
              <Image src={data.searchpage_signin} alt="signin" w="32" />
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="md">
                Sign in to save with your Genius discount and enjoy 10% off this
                booking
              </Text>
              <Box py="4">
                <Button variant="solid" colorScheme="telegram">
                  Sign in
                </Button>
              </Box>
            </Box>
          </HStack>
        </Box>

        <Box>
          <Text fontWeight="semibold" fontSize="lg" p="4">
            Choose your taxi
          </Text>
          <Box>
            <Flex overflow="scroll" gap="8" py="6" px="4">
              {carDetails.map((car) => (
                <CarDetailCards
                  key={car.type}
                  data={car}
                  select={handleSelect}
                  selected={selected}
                />
              ))}
            </Flex>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }}
            p={{ base: "4", md: "10" }}
            gap="6"
            justify={{ md: "center" }}
            align="start"
          >
            <HStack align="start">
              <Box>
                <GiBackwardTime color="#0077cc" size="1.4rem" />
              </Box>
              <Box fontWeight="semibold" fontSize="md">
                Free cancellation
              </Box>
            </HStack>
            <HStack align="start">
              <Box>
                <ImPriceTags color="#0077cc" size="1.4rem" />
              </Box>
              <Box fontWeight="semibold" fontSize="md">
                One fixed price
              </Box>
            </HStack>
            <HStack align="start">
              <Box>
                <IoMdThumbsUp color="#0077cc" size="1.4rem" />
              </Box>
              <Box fontWeight="semibold" fontSize="md">
                Tried and trusted drivers
              </Box>
            </HStack>
          </Stack>
          <Box p="4">
            <Text fontWeight="semibold" py="3">
              Passenger Details
            </Text>
            <FormControl isRequired>
              <FormLabel>Title </FormLabel>
              <Select>
                <option value="mr">Mr</option>
                <option value="miss">Miss</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
              </Select>
              <FormLabel>First name</FormLabel>
              <Input type="text" />
              <FormLabel>Last name</FormLabel>
              <Input type="text" />
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormLabel>Phone number</FormLabel>
              <Input type="number" />
            </FormControl>
            <Text fontWeight="semibold" py="3">
              Add a note for the driver
            </Text>
            <Text py="2">Any requests?</Text>
            <Textarea />
          </Box>
        </Box>
      </Box>
      <Show above="md">
        <Flex justify="flex-end" py="4" px="2">
          <Box>
            <Button variant="solid" colorScheme="telegram" h="14">
              Continue to book
            </Button>
          </Box>
        </Flex>
      </Show>
    </Box>
  );
}
