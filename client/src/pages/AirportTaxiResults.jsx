import { Fragment, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Show,
  Text,
  useToast,
} from "@chakra-ui/react";
import CoronaAlert from "../components/AirportTaxi/CoronaAlert";
import PassengerBookingDetails from "../components/AirportTaxi/PassengerBookingDetails";
import PassengerDetails from "../components/AirportTaxi/PassengerDetails";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AirportTaxiResults() {
  const [price, setPrice] = useState("100");
  const handleSetPrice = (val) => setPrice(val);
  const toast = useToast();
  const navigate = useNavigate();

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
          <PassengerBookingDetails price={price} />
          <PassengerDetails markPrice={handleSetPrice} price={price} />
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
            Rs. {price}
          </Text>
          <Box>
            <Button
              w="full"
              h="12"
              variant="solid"
              colorScheme="telegram"
              color="white"
              onClick={() => {
                toast({
                  title: "Taxi booked",
                  description:
                    "We've created a ride for you. Please send the payment from provided contact number",
                  status: "success",
                  duration: 500,
                  isClosable: true,
                });
                setTimeout(() => navigate("/"), 5000);
              }}
            >
              Confirm Booking.
            </Button>
          </Box>
        </Box>
      </Show>
    </Fragment>
  );
}
