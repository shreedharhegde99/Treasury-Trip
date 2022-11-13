import React, { useEffect,useState} from "react";
import { Center, Container, HStack, Stack, VStack } from "@chakra-ui/react";
import { Searchflight } from "../components/FlightSearch/Searchflight";
import Data from "../assets/flightsdata.json"
import { SearchCard } from "../components/FlightSearch/SearchCard";
import { FlightFilter } from "../components/FlightSearch/FlightFilter";
import { useSearchParams } from "react-router-dom";
export const FlightSearch = () => {
    const[rflightdata,setrflightdata]=useState([])
    const[flightdata,setflightdata]=useState([])
    const[params,setparams]=useSearchParams();
    const arrive=params.get("arrive");
    const depart=params.get("depart")
    const getdata=async()=>{
        const resp=await fetch(`https://treasury-trip.up.railway.app/flights?from=${depart}&to=${arrive}`)
        const data=await resp.json();
        setflightdata(data[0].data)
        setrflightdata(data[0].data)
        console.log(data)
        

    }

    useEffect(()=>{
        getdata()
    },[])
    return (
    
  <Center>
          <Container minW={"100%"} padding={{base:"10px",md:"40px"}}>
           <Searchflight />
            <Stack padding={{base:"0px",md:"15px"}} justifyContent={"space-between"}  direction={{base:"column",md:"row"}}>
                <FlightFilter  rdata={setflightdata} fdata={rflightdata} />
               <VStack overflow={"scroll"} maxH="700px" spacing={"20px"}>
               {flightdata?flightdata.map((e) => {
                    return <SearchCard  data={e} />
                }):"Data doesnt exist"}
               </VStack>
            </Stack>
        </Container>
  </Center>
   
    )
}