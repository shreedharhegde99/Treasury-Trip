import { Container,Heading, Stack,Center } from "@chakra-ui/react";
import React from "react";
import {GiDirectionSigns} from "react-icons/gi"
import { Cart } from "../components/Personaldetails/Cart";
import { Contactdetails } from "../components/Personaldetails/Contactdetails";


export const PersonalDetails=()=>{
    const[details,setdetails]=React.useState({name:"",email:"",ph:"",gender:""})
    const[data,setdata]=React.useState()
    return(<>
        <Center overflow={"hidden"}  bgSize={"cover"}   >
        <Stack m={"90px"} direction={{base:"column",md:"row"}}>
        <Contactdetails details={details} setdetails={setdetails}/>
        <Cart data={data} setdata={setdata} details={details}/>
    </Stack>
        </Center>
</>)
}