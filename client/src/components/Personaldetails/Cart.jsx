import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React,{useState} from "react";
import { RiAddBoxFill } from "react-icons/ri"
import { GrAddCircle } from "react-icons/gr"
import { FaMinusSquare } from "react-icons/fa"

export const Cart = () => {
    const[ticket,setTicket]=useState(1)
    return (<VStack pl={{base:"10px",md:"20px"}} pr={{base:"10px",md:"20px"}} pt="40px" pb={{base:"20px",md:"0px"}} spacing={"25px"} textAlign={"left"} boxShadow='md' w={{base:"80vw",md:"30vw"}}  alignItems="left" border="2"  borderRadius={"10px"}>
        <HStack justifyContent={"space-between"}>
            <Heading fontSize={"20px"}>Ticket</Heading>
            <HStack>
                <RiAddBoxFill onClick={()=>{setTicket(ticket+1)}} cursor={"pointer"} size={"25px"} />
                <Text fontSize={"20px"}>{ticket}</Text>
                <FaMinusSquare onClick={()=>{setTicket((state)=>{return state==1?state:state-1})}} cursor={"pointer"} size={"21px"} />

            </HStack>

        </HStack>

        <HStack justifyContent={"space-between"}><Text fontSize={"18px"}>Flight Fare</Text><Text fontSize={"20px"}>23243</Text></HStack>
        <HStack justifyContent={"space-between"}><Text as={"h4"} fontSize={"18px"}>Taxes and Fees</Text><Text fontSize={"20px"}>2999</Text></HStack>
        <HStack borderTop={"2px"} pt="20px" borderColor="silver" justifyContent={"space-between"}>
            <Heading fontSize={"26px"}>
                Total 
            </Heading>
            <Text fontSize={"20px"}>$2400</Text>
        </HStack>
        <Button schema="telegram" colorScheme={"telegram"}>Checkout</Button>
    </VStack>)
}