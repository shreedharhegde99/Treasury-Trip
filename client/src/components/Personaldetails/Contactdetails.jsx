// import { FormControl, FormHelperText, FormLabel, Select, Input, Stack, InputGroup, InputLeftAddon, Heading, VStack} from "@chakra-ui/react"
import { FormControl,  Select,Input, Stack, InputGroup, InputLeftAddon, Heading, VStack} from "@chakra-ui/react"
// import React, { useState } from "react"
import React from "react"
import {MdAlternateEmail,MdCall,MdPersonOutline,MdDriveFileRenameOutline} from "react-icons/md"

export const Contactdetails = (props) => {
    const{details,setdetails}=props
    return (
        <Stack bgColor={"white"} boxShadow={"base"} m="5px" p="20px" borderRadius="10px" borderColor="silver" direction={"column"} minW="40vw">
            <Heading mb="20px" fontSize={"21px"}>Contact Details</Heading>
            <FormControl>
             <VStack justifyContent={"left"} alignItems="left" spacing={"20px"}>
             <InputGroup>
                    <InputLeftAddon children={<MdPersonOutline/>} />
                    <Input value={details.name} onChange={(e)=>{setdetails({...details,name:e.target.value})}} type='text'  placeholder='First Name' />
                </InputGroup>
                <InputGroup>
                    <InputLeftAddon children={<MdDriveFileRenameOutline/>} />
                    <Input type='text' placeholder='Last Name' />
                </InputGroup>
             <InputGroup >
        
                    <InputLeftAddon children={<MdAlternateEmail/>} />
                    <Input type='email' value={details.email} onChange={(e)=>{setdetails({...details,email:e.target.value})}}  placeholder='Enter Email Address' />
                </InputGroup>
                <InputGroup >
        
                    <InputLeftAddon children={<MdCall/>} />
                    <Input type='tel' value={details.ph} onChange={(e)=>{setdetails({...details,ph:e.target.value})}}  placeholder='Phone number' />
                </InputGroup>
                
                <Select variant='outline' value={details.gender} onChange={(e)=>{setdetails({...details,gender:e.target.value})}}  placeholder='Gender'>
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