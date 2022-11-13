import React from "react";
import {Alert,AlertIcon} from "@chakra-ui/react"
import {}  from "@chakra-ui/icons"
export const Coronawarning=()=>{
    return( <Alert mt="20px"status='warning' mb="20px" border='1px' borderColor='orange'>
    <AlertIcon />
    Coronavirus (COVID-19) may affect your travel plans. Learn More
  </Alert>)
}