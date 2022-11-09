import { HStack, VStack, Heading, Text,Image } from "@chakra-ui/react";
import React from "react";
export const Featurecard = (props) => {
    const { title, desc,img } = props
    return (<HStack p={"10px"} >
        <Image src={img} />
        <VStack alignItems={"left"} align={"left"} spacing={"0px"}>
            <Heading width={"100%"}  textAlign={"left"} fontSize={"14px"}>{title}
            </Heading>
            <Text width={"90%"} fontSize={"14px"}>{desc}
            </Text>
        </VStack>
    </HStack>)
}