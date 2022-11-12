import { Container, VStack,Heading,Text,Radio,Stack, RadioGroup, SliderTrack, SliderFilledTrack, SliderThumb, Box, Slider, Checkbox} from "@chakra-ui/react";
import React from "react";

export const FlightFilter=()=>{

    return(<VStack spacing={"20px"} p={{base:"20px",md:"0px"}} minW={"400px"} textAlign="left">
        <Heading ml={"-10px"} mb="30px" as='h3' size='lg' w={"100%"}>Filters</Heading>
     
        <Heading  w={"100%"} as='h4' size='md'>Shops</Heading>
        <RadioGroup w={"full"} >
         <Stack spacing={4} direction='column' w={"full"}>
 
    <Radio value='1'>
      Any
    </Radio>
    <Radio value='2'>Direct</Radio>
    <Radio value='3'>1 stop max</Radio>
  

  </Stack>
  </RadioGroup>

  <Heading  w={"100%"} as='h4' size='md'>Duration</Heading>
  <Text w={"100%"} size='sm'>Maximum Travel Time</Text>
  <Text w="100%">2 hours</Text>
  <Slider w={{base:"80%",md:"100%"}}  defaultValue={60} min={0} max={300} step={30}>
  <SliderTrack bg='silver'>
    <Box position='relative' right={10} />
    <SliderFilledTrack bg='rgb(0,113,194)' />
  </SliderTrack>
  <SliderThumb boxSize={6} />
</Slider>
<Heading w={"100%"} as='h4' size='md'>Airlines</Heading>
<Stack w={"100%"} spacing={5} direction='column'>
  <Checkbox colorScheme='blue' >
    Airline
  </Checkbox>
  <Checkbox colorScheme='blue' >
    Indigo
  </Checkbox>
  <Checkbox colorScheme='blue' >
    Vistara
  </Checkbox>
  <Checkbox colorScheme='blue' >
    Masai Airways
  </Checkbox>
</Stack>
    </VStack>)
}