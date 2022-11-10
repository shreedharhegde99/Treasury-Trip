import { Container } from "@chakra-ui/react";
import React from "react";
import { BookFlight } from "../components/Flights/Bookflight";
import { Coronawarning } from "../components/Flights/Coronawarning";
import { Feature } from "../components/Flights/Feature";
import { Popularflight } from "../components/Flights/Popularflight";
import { Trendingflight } from "../components/Flights/Trendingflight";
import NavbarR from "../components/NavbarR";
export const Flights=()=>{
    return (
      <>
        <NavbarR />
        <Container maxW={"100%"}>
          <Container maxW={"90%"}>
            <Coronawarning />
            <BookFlight />
            <Popularflight />
            <Trendingflight />
            <Feature />
          </Container>
        </Container>
      </>
    );
}

