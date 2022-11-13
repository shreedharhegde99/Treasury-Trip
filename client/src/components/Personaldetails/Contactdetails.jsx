import { FormControl, FormHelperText, FormLabel, Select, Input, Stack, InputGroup, InputLeftAddon, Heading, VStack} from "@chakra-ui/react"
import React from "react"
import {MdAlternateEmail,MdCall,MdPersonOutline,MdDriveFileRenameOutline} from "react-icons/md"

export const Contactdetails = () => {
    return (
        <Stack bgColor={"white"} boxShadow={"base"} m="5px" p="20px" borderRadius="10px" borderColor="silver" direction={"column"} minW="40vw">
            <Heading mb="20px" fontSize={"21px"}>Contact Details</Heading>
            <FormControl>
             <VStack justifyContent={"left"} alignItems="left" spacing={"20px"}>
            
             <InputGroup >
        
                    <InputLeftAddon children={<MdAlternateEmail/>} />
                    <Input type='email' placeholder='Enter Email Address' />
                </InputGroup>
                <InputGroup >
        
                    <InputLeftAddon children={<MdCall/>} />
                    <Input type='tel' placeholder='Phone number' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<MdPersonOutline/>} />
                    <Input type='text' placeholder='First Name' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<MdDriveFileRenameOutline/>} />
                    <Input type='text' placeholder='Last Name' />
                </InputGroup>
                <Select variant='outline' placeholder='Gender'>
                    <option>
                        Male
                    </option>
                    <option>
                        Female
                    </option>
                    <option>
                        Other
                    </option>
                </Select>
             </VStack>

            </FormControl>
        </Stack>)
}