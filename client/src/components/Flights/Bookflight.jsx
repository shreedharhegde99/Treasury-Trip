import { Button, Checkbox, Container, Heading, HStack, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, Stack ,Text} from "@chakra-ui/react";
import React from "react";

export const BookFlight = () => {
    const [value, setValue] = React.useState('1')
    return (
        <Container minW={"100%"} textAlign="left" pb={"40px"}>
            <Heading as='h3' size='lg' mt={"30px"}>
                Compare and book flights with ease
            </Heading>
            <Text mt="20px">Discover your next dream destination
</Text>
            <RadioGroup onChange={setValue} value={value} mt="20px">
                <Stack direction='row' gap="20px">
                    <Radio value='1'>Round-Trip</Radio>
                    <Radio value='2'>One Way</Radio>
                    <Radio value='3'>Multi City</Radio>
                    <Select  placeholder='Economy' width={"120px"} maxH="40px" variant='unstyled'>
                        <option value='option1'>Economy</option>
                        <option value='option2'>Premium</option>
                        <option value='option3'>Business</option>
                        <option value='option3'>First-Class</option>
                    </Select>

                    <Select placeholder='1 person' width={"120px"} maxH="40px" variant='unstyled'>
                        <option value='option1'>1 person</option>
                        <option value='option2'>2 person</option>
                        <option value='option3'>3 person</option>
                        <option value='option3'>4 person</option>
                    </Select>
                </Stack>

                <Stack direction={"row"} mt="20px" borderRadius={"5px"} bgColor={"orange"} p="5px">
                    <InputGroup bgColor={"white"}  borderRadius="10px">
                        <InputLeftAddon  minH={"50px"}  children='✈' />
                        <Input minH={"50px"} type='text' placeholder='where from?' />
                    </InputGroup>
                    <Input minH={"50px"} bgColor={"white"} type='tel' placeholder='where from?' />
                    <Input minH={"50px"} bgColor={"white"}  type={"date"} placeholder='Choose departure date' />
                    <Button minH={"50px"}  border="2px" borderColor={"orange"}  w={"290px"} colorScheme='telegram'>SEARCH</Button>
                </Stack>
                
            </RadioGroup>
            <Checkbox mt={"20px"} colorScheme='blue' defaultChecked>
    
Direct flights only
  </Checkbox>
        </Container>
    )
}
