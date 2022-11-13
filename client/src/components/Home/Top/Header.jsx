import { Center, Input, Stack,Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Header(){
   let navigate=useNavigate()
   const[place,setplace]=React.useState("")
    const handleclick=()=>{
        navigate(`/hotels/${place}`)
    }
    return(<Center >
        <Stack  border="2px" borderColor={"silver"} mt="20px" borderRadius={"10px"} p="10px" bgColor={"rgb(0,34,79)"} direction={{base:"column",md:"row"}}>
        <Input value={place} onChange={(e)=>{setplace(e.target.value)}} bgColor={"white"} placeholder="Where are you going?"/>
        <Input bgColor={"white"} type={"date"}/>
        <Button onClick={handleclick} w={{base:"140px",md:"290px"}} bgColor={"white"}>Search</Button>

        </Stack>
    </Center>)
}