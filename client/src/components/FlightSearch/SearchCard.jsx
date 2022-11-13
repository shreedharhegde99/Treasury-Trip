import { Container, HStack,Stack, Text, VStack ,Image, Heading, Button,} from "@chakra-ui/react"
import React from "react"
import flightitem from "../../assets/flightitem.jpg"
import airindia from "../../assets/airindia.jpg"
import { useNavigate, useSearchParams } from "react-router-dom"

export const SearchCard=(props)=>{
    const {arrive,departure,loc1,loc2,_id,duration,airline} = props.data
    const date=new Date()
    const[params,setparams]=useSearchParams()
    const today=date.getDate()
    let prc=Math.floor(Math.random() * 1000)+1500;

    let navigate=useNavigate()
    return(
       <Stack bgColor={"#f9f9f9"} key={_id} direction={{base:"column",md:"row"}} alignContent="center" alignItems="center" p={"10px"} border="1px" borderColor={"silver"}  boxShadow='base' borderRadius="20px" justifyContent={"space-evenly"} minW={{base:"90%",md:"690px"}} maxW={{base:"90%",md:"690px"}}>
        <VStack>
            <Image src={airindia}/>
            <Text>{airline}</Text>
        </VStack>
        <VStack>
            <Text>{departure}</Text>
            <Text>{loc1+"-" +today +" "+"Nov"}</Text>
        </VStack>
        <VStack>
            <Text>{duration}</Text>
            <Text borderColor={"blackAlpha.300"} borderTop={"2px"}>Direct</Text>
        </VStack>
        <VStack>
            <Text>{arrive}</Text>
            <Text>{loc2+"-"+today +" "+ "Nov"}</Text>
        </VStack>



            <VStack>
                    <Image src={flightitem} mr="-20px" />
                    <Heading fontSize={"20px"} minW="100%" textAlign={{base:"center",md:"right"}}>{"₹ "+" "+prc}</Heading>
                    <Text minW="100%" textAlign={{base:"center",md:"right"}}>Total price for all travelers</Text>
                    <Button  onClick={()=>{navigate(`/flights/book/flight?id=${_id}&prc=${prc}`)}} colorScheme={"telegram"} minW={"100%"}>Select Flight</Button>
            </VStack>
       </Stack>

    )
}