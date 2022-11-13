import { Container,Heading, Stack,Center } from "@chakra-ui/react";
import React from "react";
import {GiDirectionSigns} from "react-icons/gi"
import { Cart } from "../components/Personaldetails/Cart";
import { Contactdetails } from "../components/Personaldetails/Contactdetails";

export const PersonalDetails=()=>{
    return(<>
        <Heading p={"10px"} bgColor="rgb(237,242,247)" mt={"40px"} fontSize="26px" w="full" textAlign={"center"}>Delhi To Banglore</Heading>
        <Center overflow={"hidden"}  bgSize={"cover"}   >
        <Stack m={"90px"} direction={{base:"column",md:"row"}}>
        <Contactdetails/>
        <Cart/>
    </Stack>
        </Center>
</>)
}