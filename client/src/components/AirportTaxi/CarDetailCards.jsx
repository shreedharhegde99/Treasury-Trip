import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { BsFillPersonFill, BsCheckCircleFill } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";

export default function CarDetailCards({ data, select, selected }) {
  const { image, type, persons, bags, price } = data;
  return (
    <Fragment>
      <Box
        border={`${selected === type ? "4px" : "2px"}`}
        borderColor={`${selected === type ? "#0077cc" : "black"}`}
        minW="2xs"
        onClick={() => select(type)}
        p="4"
        position="relative"
        fontWeight="semibold"
      >
        <Box
          display={`${selected === type ? "block" : "none"}`}
          position="absolute"
          right="4"
          top="4"
        >
          <BsCheckCircleFill size="1.5rem" color="#0077cc" />
        </Box>

        <Box py="2">
          <Image src={image} alt={type} maxW="20" />
        </Box>
        <Text py="2">{type}</Text>
        <HStack py="2" gap="3">
          <Box>
            <BsFillPersonFill size="1.2rem" />
          </Box>
          <Text> {persons} </Text>
          <Box>
            <FaSuitcaseRolling size="1.2rem" />
          </Box>
          <Text>{bags}</Text>
        </HStack>
        <Box fontSize="2xl">Rs. {price}</Box>
      </Box>
    </Fragment>
  );
}
