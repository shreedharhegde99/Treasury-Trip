import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import shivam from "../../assets/shivam.jpg";
import { useLocation } from "react-router-dom";
const FooterDwn = () => {
  const { pathname } = useLocation();

  if (
    pathname === "/car-rentals" ||
    pathname === "/login" ||
    pathname === "/register"
  ) {
    return null;
  } else {
    return (
      <>
        <Box>
          <Box bg="blue.700">
            <Box
              w={["90%", "90%", "90%", "70%"]}
              m="auto"
              mb={3}
              display={"flex"}
              fontSize={[5, 14]}
              p="5px 0px"
              fontWeight={600}
              fontFamily={"sans-serif"}
              gap={8}
              color="whiteAlpha.800"
              textDecor="underline"
            >
              <Text>Mobile version</Text>
              <Text>Your account</Text>
              <Text>Make changes online to your booking</Text>
              <Text>Customer Service Help</Text>
              <Text>Become an affilate</Text>
              <Text>Treasury.com for Business</Text>
            </Box>
          </Box>
          <Box
            m="auto"
            w={["90%", "90%", "90%", "70%"]}
            display={"flex"}
            fontSize={[6, 12]}
            color="blue"
            justifyContent="space-between"
            gap={6}
          >
            <Box display={"flex"} flexDir="column" gap={"3px"}>
              <Text>Countries </Text>
              <Text> Regions </Text>
              <Text>Cities</Text>
              <Text>Districts </Text>
              <Text>Airports</Text>
              <Text>Hotels</Text>
              <Text>Places of interest</Text>
            </Box>
            <Box display={"flex"} flexDir="column" gap={"3px"}>
              <Text>Homes </Text>
              <Text> Apartments </Text>
              <Text>Resorts</Text>
              <Text>Villas</Text>
              <Text>Hostels</Text>
              <Text>B&Bs</Text>
              <Text>Guest houses</Text>
            </Box>
            <Box display={"flex"} flexDir="column" gap={"3px"}>
              <Text>Unique places to stay </Text>
              <Text>All destinations</Text>
              <Text>Discover </Text>
              <Text>Reviews</Text>
              <Text>Discover monthly stays Unpacked: Travel articles</Text>
              <Text>Travel communities</Text>
              <Text>Seasonal and holiday deals</Text>
            </Box>
            <Box display={"flex"} flexDir="column" gap={"3px"}>
              <Text>Car rental </Text>
              <Text> Flight finder</Text>
              <Text>Restaurant reservations</Text>
              <Text>Booking.com for Travel Agents</Text>
            </Box>
            <Box display={"flex"} flexDir="column" gap={"3px"}>
              <Text>Coronavirus (COVID-19) FAQs </Text>
              <Text>About Booking.com</Text>
              <Text>Customer Service Help</Text>
              <Text>Partner help</Text>
              <Text>Careers</Text>
              <Text>Sustainability</Text>
              <Text>Press center</Text>
              <Text>Safety Resource Center</Text>
              <Text>Investor relations</Text>
              <Text>Terms & conditions</Text>
              <Text>Partner dispute</Text>
              <Text>How We Work</Text>
              <Text>Privacy & cookie statement</Text>
              <Text>MSA statement</Text>
              <Text> Corporate contact</Text>
            </Box>
          </Box>
          <Text color="blueviolet" fontSize={[10, 16]} textAlign={"center"}>
            Extranet Login
          </Text>
          <Text
            mt={5}
            color="blueviolet"
            fontSize={[10, 16]}
            textAlign={"center"}
          >
            Founder
          </Text>
          <Box
            justifyContent={"space-around"}
            display={"flex"}
            w="50%"
            m="auto"
            alignItems={"center"}
          >
            <Image borderRadius={5} w={["50%", "15%"]} src={shivam} />

            {/* <Image w="60%" src="https://avatars.githubusercontent.com/u/84116631?s=40&v=4" />
        
              <Image w="40%" src="https://avatars.githubusercontent.com/u/107990962?s=64&v=4" /> */}
          </Box>
        </Box>
      </>
    );
  }
};

export default FooterDwn;
