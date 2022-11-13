import { Button, Heading, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import React,{useEffect, useState} from "react";
import { RiAddBoxFill } from "react-icons/ri"
import { GrAddCircle } from "react-icons/gr"
import { FaMinusSquare } from "react-icons/fa"
import { useNavigate, useSearchParams } from "react-router-dom";

export const Cart = ({details}) => {
    const toast=useToast()
    const[ticket,setTicket]=useState(1)
    const[params,setparams]=useSearchParams()
    let navigate=useNavigate()
   
    let prc=params.get("prc")
    const id=params.get("id")


    const handlecheckout=()=>{
        if(details.name.length>1&&details.email.length>1&&details.ph.length>0){
            toast({
                title: 'Success',
                description: "Redirecting to ticket page",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              navigate(`/invoice/for?id=${id}&prc=${prc}&name=${details.name}&ticket=${ticket}`)
        }else{
                toast({
          title: 'Information Required',
          description: "All input fields are required",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        }
    }
    
    return (<VStack pl={{base:"10px",md:"20px"}} pr={{base:"10px",md:"20px"}} pt="40px" pb={{base:"20px",md:"0px"}} spacing={"25px"} textAlign={"left"} boxShadow='md' w={{base:"80vw",md:"30vw"}}  alignItems="left" border="2"  borderRadius={"10px"}>
        <HStack justifyContent={"space-between"}>
            <Heading fontSize={"20px"}>Ticket</Heading>
            <HStack>
                <RiAddBoxFill onClick={()=>{setTicket(ticket+1)}} cursor={"pointer"} size={"25px"} />
                <Text fontSize={"20px"}>{ticket}</Text>
                <FaMinusSquare onClick={()=>{setTicket((state)=>{return state==1?state:state-1})}} cursor={"pointer"} size={"21px"} />

            </HStack>

        </HStack>

        <HStack justifyContent={"space-between"}><Text fontSize={"18px"}>Flight Fare</Text><Text fontSize={"20px"}>{"₹ "+" "+(prc*ticket)}</Text></HStack>
        <HStack justifyContent={"space-between"}><Text as={"h4"} fontSize={"18px"}>Taxes and Fees</Text><Text fontSize={"20px"}>₹ 1499</Text></HStack>
        <HStack borderTop={"2px"} pt="20px" borderColor="silver" justifyContent={"space-between"}>
            <Heading fontSize={"26px"}>
                Total 
            </Heading>
            <Text fontSize={"20px"}>{"₹ "+" "+(prc*ticket+1499)}</Text>
        </HStack>
        <Button schema="telegram" colorScheme={"telegram"} onClick={handlecheckout}>Checkout</Button>
    </VStack>)
}