// import { Box, Button,Center, Container, Heading, Image,Text,Stack, VStack } from '@chakra-ui/react'
import { Container, Heading, Text ,VStack } from '@chakra-ui/react'
import React from 'react'
import Header from '../Top/Header'

export default function Images() {
 
  return (<Container borderTop={"2px"} bgSize={{base:"cover",md:"cover"} }borderColor="white" h={{base:"300px",md:"400px"}} minW="100vw" bgImage={"https://q-xx.bstatic.com/xdata/images/xphoto/3000x1033/177464000.jpeg?k=e74f22d059a85966c866bcf068f5a2a49f08ace871a3f459f5d71569c499896a&o="}>
 <VStack w="full" textAlign={"left"}>
 <Heading   mt={{base:"40px",md:"100px"}} fontSize={{base:"39px",md:"59px"}} color={"white"}>Late Escape Deals.
</Heading>
<Text w="600px" display={{base:"none",md:"unset"}} textAlign={"center"} color={"silver"}>There’s always time for one more trip. Discover deals on stays between 1 October 2022 - 3 January 2023</Text>
 </VStack>

<Header/>
  </Container>
  )
}
