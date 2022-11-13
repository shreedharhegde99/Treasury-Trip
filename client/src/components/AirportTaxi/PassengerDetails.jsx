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
  useToast,
} from "@chakra-ui/react";
import taxidata from "../../assets/airportTaxi.json";
import carDetails from "../../assets/carDetails.json";
import CarDetailCards from "./CarDetailCards";

import { GiBackwardTime } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";
import { IoMdThumbsUp } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPrice } from "../../redux/taxis/taxis.action";
import { Navigate, useNavigate } from "react-router-dom";

export default function PassengerDetails({ markPrice, price }) {
  const [selected, setSelected] = useState("Standard");
  const initData = {
    fName: "",
    lName: "",
    email: "",
    contact: "",
  };
  const [data, setData] = useState(initData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  function handleSelect(val, amt) {
    setSelected(val);
    markPrice(amt);
  }

  const handleCheckout = (e) => {
    e.preventDefault();
    const { fName, lName, email, contact } = data;
    if (fName && lName && email && contact) {
      dispatch(setPrice(price));
      setData({ ...data, ...initData });
      // return <Navigate to="/checkout" replace="true" />;
      // navigate("/");

      toast({
        title: "Taxi booked",
        description:
          "We've created a ride for you. Please send the payment from provided contact number",
        status: "success",
        duration: 5000,
        position:"top",
        isClosable: true,
      });
      setTimeout(() => navigate("/"), 5000);
    }
    return;
  };
  return (
    <Box w={{ md: "lg", lg: "2xl" }} mb={{ base: "48", md: "1" }}>
      <Box>
        <Box>
          <HStack align="start">
            <Box>
              <Image src={taxidata.searchpage_signin} alt="signin" w="32" />
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
              <Input
                type="text"
                value={data.fName}
                onChange={handleChange}
                name="fName"
              />
              <FormLabel>Last name</FormLabel>
              <Input
                type="text"
                value={data.lName}
                onChange={handleChange}
                name="lName"
              />
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={data.email}
                onChange={handleChange}
                name="email"
              />
              <FormLabel>Phone number</FormLabel>
              <Input
                type="text"
                maxLength="10"
                value={data.contact}
                onChange={handleChange}
                name="contact"
              />
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
            <Button
              variant="solid"
              colorScheme="telegram"
              h="14"
              onClick={handleCheckout}
            >
              Continue to book
            </Button>
          </Box>
        </Flex>
      </Show>
    </Box>
  );
}
