import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

export default function AirportTransfers({ logo, title, details }) {
  return (
    <HStack alignItems="start" spacing="8" w="full">
      <Box>
        <Image src={logo} alt="Taxi" maxW={{ base: "40", md: "32", lg: "20" }} />
      </Box>
      <Box>
        <Heading as="h3" size="sm">
         {title}
        </Heading>
        <Text>
         {details}
        </Text>
      </Box>
    </HStack>
  );
}

