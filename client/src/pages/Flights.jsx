import { Center, Container } from "@chakra-ui/react";
import React from "react";
import { BookFlight } from "../components/Flights/Bookflight";
import { Coronawarning } from "../components/Flights/Coronawarning";
import { Faqpage } from "../components/Flights/Faqpage";
import { Feature } from "../components/Flights/Feature";
import { Flyword } from "../components/Flights/Flyword";
import { Popularflight } from "../components/Flights/Popularflight";
import { Trendingflight } from "../components/Flights/Trendingflight";
export const Flights=()=>{
    return(
        <Container maxW={"100vw"}  overflow="hidden" minW={"100vw"} bgColor="rgb(242,242,242)" pt="10px">
         <Center>
         <Container maxW={{base:"95vw",md:"90vw"}} >
           <Coronawarning/>
           <BookFlight/>
          <Center > <Popularflight/></Center>
           <Center><Trendingflight/></Center>
           <Feature/>
           <Flyword/>
            <Faqpage/>

           </Container>
          
         </Center>


        </Container>
   
    );
}

