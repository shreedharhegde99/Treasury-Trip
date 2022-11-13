import { Container, Heading, Text} from "@chakra-ui/react";
import React from "react";

export const Faqcard = (props) => {
    const {que,ans}=props
    return (
        <Container boxShadow='base' p={"20px"} borderRadius="10px">
            <Heading as='h4' size='sm'>
                {que}
            </Heading>
            <Text fontSize='md'>{ans}</Text>

        </Container>
    )
}