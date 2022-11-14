import { Button, Checkbox, Container, Heading, HStack, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, Stack ,Text} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom"
// import {useNavigate, useSearchParams} from "react-router-dom"

export const BookFlight = () => {
    const [value, setValue] = React.useState('1')
    // const[params,setparams]=useSearchParams()
    const[arrive,setarrive]=React.useState("")
    const[depart,setdepart]=React.useState("")
    const[date,setdate]=React.useState("")
    let navigate=useNavigate()
    const handleclick=()=>{
        // navigate(`search/result${"?arrive="+arrive+"&depart="+depart+"&"+"date="+date}`)
        navigate(`search/result?arrive=${arrive}&depart=${depart}&date=${date}`)
       
    }
    return (
        <Container bgColor={"white"} borderRadius="10px" minW={"100%"} textAlign="left" p="20px" mb={"40px"}>
            <Heading   fontSize={"32px"} mt={"10px"}>
                Compare and book flights with ease
            </Heading>
            <Text mt="20px" fontSize={"26px"}>Discover your next dream destination
</Text>
            <RadioGroup onChange={setValue} value={value} mt="30px">
                <Stack fontSize={"22px"} mt={"10px"} direction={{base:"column",md:"row"}} gap="20px">
                    <HStack justifyContent={"space-evenly"}>
                    <Radio fontSize={"22px"} value='1'>Round-Trip</Radio>
                    <Radio fontSize={"22px"} value='2'>One Way</Radio>
                    <Radio  fontSize={"22px"}value='3'>Multi City</Radio>
                    </HStack>
               <HStack fontSize={"22px"} justifyContent={"space-evenly"}>
               <Select  placeholder='Economy' width={"120px"} maxH="40px" variant='unstyled'>
                        <option value='option1'>Economy</option>
                        <option value='option2'>Premium</option>
                        <option value='option3'>Business</option>
                        <option value='option3'>First-Class</option>
                    </Select>

                    <Select fontSize={"22px"} placeholder='1 person' width={"120px"} maxH="40px" variant='unstyled'>
                        <option value='option1'>1 person</option>
                        <option value='option2'>2 person</option>
                        <option value='option3'>3 person</option>
                        <option value='option3'>4 person</option>
                    </Select>
               </HStack>
                </Stack>

                <Stack fontSize={"22px"} shadow={"lg"} direction={{base:"column",md:"row"}} mt="20px" borderRadius={"5px"} bgColor={"rgb(0,136,204)"} p="10px">
                    <InputGroup bgColor={"white"}  borderRadius="10px">
                        <InputLeftAddon  minH={"50px"}  children='✈' />
                        <Input minH={"50px"} type='text' placeholder='where from?' value={depart} onChange={(e)=>{setdepart(e.target.value)}} />
                    </InputGroup>
                    <Input minH={"50px"} bgColor={"white"} value={arrive} onChange={(e)=>{setarrive(e.target.value)}} type='tel' placeholder='to?' />
                    <Input minH={"50px"} bgColor={"white"} value={date} onChange={(e)=>{setdate(e.target.value)}} type={"date"} placeholder='Choose departure date' />
                    <Button onClick={handleclick} minH={"50px"} _hover={{bgColor:"white",color:"rgb(0,136,204)"}} border="2px" borderColor={"white"}  w={{base:"100%",md:"290px"}} colorScheme='telegram'>SEARCH</Button>
                </Stack>
                
            </RadioGroup>
            <Checkbox mt={"20px"} colorScheme='blue' defaultChecked>
    
Direct flights only
  </Checkbox>
        </Container>
    )
}
