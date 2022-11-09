import {Box, Button, HStack, Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
// import {AiOutlineCalendar} from "react-icons/ai"
import {GiTreeDoor} from "react-icons/gi"
import { FaInfoCircle } from "react-icons/fa";
import NearByDestination from './NearByDestination';
export default function UpperSection() {
    return (
        <>
           <Box bg='#F5F5F5' w='100%' h="auto" pb='20'>           
                 <h1 style={{fontSize:"30px",fontWeight:"bold",marginLeft:"20%",paddingTop:"30px"}}>Find and book a great experience</h1>
                 <p  style={{fontSize:"18px",color:"grey",marginLeft:"20%"}}>Discover more of your destination and make the most of your trip</p>
                 <HStack w="70%" style={{marginTop:"27px",marginLeft:"20%",marginRight:"100%"}}>
                    <InputGroup>
                    <InputLeftElement 
                        children={<GiTreeDoor color='gray.300' size="30px" />}
                    />
                        <Input p="25px" pl="40px" placeholder='Where are you going'/>
                    </InputGroup>                   
                      <Input cursor="pointer" placeholder='Select your dates' type="date" p="25px" pl="40px"/>                   
                   <Button bg="#006CE4" color="white" p="25px 40px 25px 40px">Search</Button>
                 </HStack>
           </Box>
           <Box style={{borderRadius:"10px",border:"1px solid lightgrey",width:"80%",height:"80px",margin:"auto",marginTop:"40px"}}> 
            <p style={{marginLeft:"10%",paddingTop:"25px" ,display:"flex",gap:"20px"}}><FaInfoCircle color='brown' style={{marginTop:"5px",marginLeft:"-8%"}}/>Please check local guidelines before planning your visit.<span style={{color:"#4F6CE8",cursor:"pointer",marginLeft:"-15px"}}>Read more</span></p>
           </Box>
           <NearByDestination/>
        </>
    )
}