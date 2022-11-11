import { Container, HStack,Stack, Text, VStack ,Image, Heading, Button,} from "@chakra-ui/react"
import React from "react"
import flightitem from "../../assets/flightitem.jpg"
import airindia from "../../assets/airindia.jpg"

export const SearchCard=(props)=>{
    const {arrive,departs,loc1,loc2,prc,id,duration,airline} = props.data
    const date=new Date()
    const today=date.getDate()
    return(
       <Stack direction={{base:"column",md:"row"}} alignContent="center" alignItems="center" p={"10px"} border="1px" borderColor={"silver"}  boxShadow='base' borderRadius="20px" justifyContent={"space-evenly"} minW={{base:"90%",md:"650px"}} maxW={{base:"90%",md:"650px"}}>
        <VStack>
            <Image src={airindia}/>
            <Text>{airline}</Text>
        </VStack>
        <VStack>
            <Text>{departs}</Text>
            <Text>{loc1+"-" +today +" "+"Nov"}</Text>
        </VStack>
        <VStack>
            <Text>{duration.hours +"H " + duration.minute+" M"}</Text>
            <Text borderColor={"blackAlpha.300"} borderTop={"2px"}>Direct</Text>
        </VStack>
        <VStack>
            <Text>{arrive}</Text>
            <Text>{loc2+"-"+today +" "+ "Nov"}</Text>
        </VStack>



            <VStack>
                    <Image src={flightitem} mr="-20px" />
                    <Heading fontSize={"20px"} minW="100%" textAlign={{base:"center",md:"right"}}>{prc}</Heading>
                    <Text minW="100%" textAlign={{base:"center",md:"right"}}>Total price for all travelers</Text>
                    <Button  variant='outline' colorScheme={"blue"} minW={"100%"}>Select Flight</Button>
            </VStack>
       </Stack>

    )
}