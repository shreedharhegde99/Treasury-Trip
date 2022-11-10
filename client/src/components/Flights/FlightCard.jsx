import { Heading, Image, Stack,Text } from "@chakra-ui/react";
import React from "react";

export const FlightCard = (props) => {
    const { image, title, desc } = props
    return (
        <Stack>
            <Image minW={"280px"} maxW="280px" minH={"170px"} maxH="170px" src={image} alt={title} />
            <Heading as='h4' fontSize={"17px"}>
                {title}
            </Heading>
            <Text fontSize='sm'>{desc}</Text>
        </Stack>
    )
}