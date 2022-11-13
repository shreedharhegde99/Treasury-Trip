// import { Container,Heading, Stack,Center } from "@chakra-ui/react";
import {  Stack,Center } from "@chakra-ui/react";
import React,{useEffect,useState} from "react";
// import {GiDirectionSigns} from "react-icons/gi"
import { Cart } from "../components/Personaldetails/Cart";
import { Contactdetails } from "../components/Personaldetails/Contactdetails";
import { useSearchParams } from "react-router-dom";


export const PersonalDetails=()=>{
    const[details,setdetails]=useState({name:"",email:"",ph:"",gender:""})
    const[data,setdata]=useState()
    const[params,setparams]=useSearchParams()
    const id=params.get("id")
    const getdata=async()=>{
        let resp=await fetch(`https://treasury-trip.up.railway.app/flights/${id}`)
        let rdata=await resp.json()
        console.log("rdata",rdata)
        setdata(rdata)
    }
  useEffect(()=>{
    getdata()
  },[])

  
    return(<>
        <Center overflow={"hidden"}  bgSize={"cover"}   >
        <Stack m={"90px"} direction={{base:"column",md:"row"}}>
        <Contactdetails details={details} setdetails={setdetails}/>
        <Cart data={data} setdata={setdata} details={details}/>
    </Stack>
        </Center>
</>)
}