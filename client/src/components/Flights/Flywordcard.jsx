import { Container, HStack, Image, VStack,Heading,Text } from "@chakra-ui/react";
import React from "react";

export const Flywordcard = (props) => {
    const { title, desc, img } = props
    return (
        <HStack bgColor={"white"} p="20px" borderRadius={"10px"}>
            <Image borderRadius={"10px"} w="90px" h={"90px"} src={img} alt={title} />
            <VStack textAlign={"left"} spacing="0px">
                <Heading w={"100%"} as='h5' size='sm' >
                    {title}
                </Heading>
                <Text fontSize='md'>{desc}</Text>
            </VStack>
        </HStack>)
}