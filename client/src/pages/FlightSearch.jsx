import React from "react";
import { Center, Container, HStack, Stack, VStack } from "@chakra-ui/react";
import { Searchflight } from "../components/FlightSearch/Searchflight";
import Data from "../assets/flightsdata.json"
import { SearchCard } from "../components/FlightSearch/SearchCard";
import { FlightFilter } from "../components/FlightSearch/FlightFilter";
export const FlightSearch = () => {
    return (
    
  <Center>
          <Container minW={"100%"} padding={{base:"10px",md:"40px"}}>
           <Searchflight />
            <Stack padding={{base:"0px",md:"15px"}} justifyContent={"space-between"} direction={{base:"column",md:"row"}}>
                <FlightFilter />
               <VStack className="scrl" spacing={"20px"}>
               {Data.delhitobanglore.map((e) => {
                    return <SearchCard data={e} />
                })}
               </VStack>
            </Stack>
        </Container>
  </Center>
   
    )
}