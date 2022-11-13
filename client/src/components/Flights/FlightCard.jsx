import { Heading, Image, Stack,Text } from "@chakra-ui/react";
import React from "react";

export const FlightCard = (props) => {
    const { image, title, desc } = props
    return (
        <Stack _focus={{bgColor:"black"}}>
            <Image minW={{base:"80vw",md:"280px"}}  maxW={{base:"100%",md:"280px"}} minH={{base:"200px",md:"170px"}} maxH={{base:"200px",md:"170px"}} src={image} alt={title} />
            <Heading as='h4' fontSize={"17px"}>
                {title}
            </Heading>
            <Text fontSize='sm'>{desc}</Text>
        </Stack>
    )
}