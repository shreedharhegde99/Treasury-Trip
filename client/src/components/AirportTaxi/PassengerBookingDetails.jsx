import { Box, Button, Text, Divider } from "@chakra-ui/react";

export default function PassengerBookingDetails() {
  return (
    <Box w={{md:"md"}}>
      <Box>
        <Box p="4" bg="blue.100" fontWeight="semibold">
          Your booking details
        </Box>
      </Box>
      <Box p="4">
        <Box py="2">
          <Text>From</Text>
          <Text></Text>
        </Box>
        <Box py="2">
          <Text>To</Text>
          <Text></Text>
        </Box>
        <Box py="2">
          <Text>Passengers</Text>
          <Text></Text>
        </Box>
        <Divider />
        <Box py="2">
          <Text>Yout trip</Text>
          <Text></Text>
        </Box>
        <Box>
          <Button
            variant="outline"
            colorScheme="telegram"
            w={{ base: "full" }}
            h="14"
          >
            Add your return
          </Button>
        </Box>
        <Box py="2">
          <Text>Journey time</Text>
          <Text fontWeight="semibold">About 50 mins</Text>
        </Box>
        <Box py="2">
          <Text>Distance</Text>
          <Text fontWeight="semibold">About 33.94km</Text>
        </Box>
        <Box py="2">
          <Text>Total price</Text>
          <Text fontWeight="semibold" fontSize="4xl">
            Rs 100{" "}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
