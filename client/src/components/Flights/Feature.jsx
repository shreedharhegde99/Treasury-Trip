import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Featurecard } from "./Featurecard";
import srcicon from "../../assets/arpiconfp.jpg"
import hugeicon from "../../assets/srciconfp.jpg"
import dollaricon from  "../../assets/dollariconfp.jpg"

export const Feature = () => {
    return (
        <Container minW="100%" pl={"100px"} mb={"40px"} p={"20px"} bgColor="rgb(242,242,242)">
            <Stack direction={"row"}>
                <Featurecard img={hugeicon} title="Huge Selection" desc="Easily compare thousands of flights, all in one place"/>
                <Featurecard img={dollaricon} title="No hidden fees" desc="Always know exactly what you’re paying for"/>
                <Featurecard img={srcicon} title="More flexibility" desc="Keep your travel dates open with flexible plane ticket options"/>
            </Stack>
        </Container>
    )
}