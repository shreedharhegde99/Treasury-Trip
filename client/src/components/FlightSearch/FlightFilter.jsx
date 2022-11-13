import { Container, VStack,Heading,Text,Radio,Stack, RadioGroup, SliderTrack, SliderFilledTrack, SliderThumb, Box, Slider, Checkbox} from "@chakra-ui/react";
import React from "react";

export const FlightFilter=(props)=>{
  const{fdata,rdata,}=props
  const handlefilter=(e)=>{
    if(e.target.checked){
        const newarr=fdata.filter((el)=>{
            return el.airline==e.target.value
        })

        rdata(newarr)
    }else{
      rdata(fdata)
    }
  }
  const handleduration=(e)=>{
    if(e.target.checked){
      const newarr=fdata.filter((el)=>{
        let dd=el.duration.split(" ").map(String)
        
        if(dd.length==2){
          let h=dd[0].slice(0, -1)
          h=Number(h)
          console.log(h)
          if(h<=e.target.value){
            return true
          }else{
            return false
          }
        }else{
          return true
        }
          
      })

      rdata(newarr)
  }else{
    rdata(fdata)
  }
  }

    return(<VStack bgColor={"rgb(0,136,204)"} borderRadius="10px" color="white" spacing={"20px"} p={{base:"20px",md:"30px"}} minW={"400px"} textAlign="left">
        <Heading ml={"-10px"} mb="30px" as='h3' pb="10px" borderBottom={"1px"} borderColor="silver" fontSize={"23px"} w={"100%"}>APPLY FILTERS</Heading>
     
        <Heading  w={"100%"} as='h4' size='md'>Shops</Heading>
        <RadioGroup w={"full"} >
         <Stack spacing={4} direction='column' w={"full"}>
 
    <Radio colorScheme={"white"} value='1'>
      Any
    </Radio>
    <Radio value='2' colorScheme={"white"}>Direct</Radio>
 
  

  </Stack>
  </RadioGroup>

  <Heading w={"100%"} as='h4' size='md'>Duration</Heading>
<Stack w={"100%"} spacing={5} direction='column'>
  <Checkbox  onChange={handleduration} value="2" colorScheme='green' >
    2 Hour
  </Checkbox>
  <Checkbox onChange={handleduration} value={"3"} colorScheme='green' >
    3 Hour
  </Checkbox>
  <Checkbox onChange={handleduration} value="4" colorScheme='green' >
    4 Hour
  </Checkbox>
</Stack>
<Heading w={"100%"} as='h4' size='md'>Airlines</Heading>
<Stack w={"100%"} spacing={5} direction='column'>
  <Checkbox  onChange={handlefilter} value="airline" colorScheme='green' >
    Airline
  </Checkbox>
  <Checkbox onChange={handlefilter} value={"IndiGo"} colorScheme='green' >
    Indigo
  </Checkbox>
  <Checkbox onChange={handlefilter} value="Vistara" colorScheme='green' >
    Vistara
  </Checkbox>
</Stack>
    </VStack>)
}