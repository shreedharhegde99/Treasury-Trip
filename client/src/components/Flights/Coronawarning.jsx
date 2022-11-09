import React from "react";
import {Alert,AlertIcon} from "@chakra-ui/react"
import {}  from "@chakra-ui/icons"
export const Coronawarning=()=>{
    return( <Alert m={"10px"} status='warning' border='1px' borderColor='orange'>
    <AlertIcon />
    Coronavirus (COVID-19) may affect your travel plans. Learn More
  </Alert>)
}