import {Box, Button, Input,InputGroup,InputLeftElement, Stack, Text, VStack} from '@chakra-ui/react'
import {GiTreeDoor} from "react-icons/gi"
import { FaInfoCircle } from "react-icons/fa";
import NearByDestination from './NearByDestination';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getCityData, loaded } from '../../redux/attractions/attractions.action';
import { useNavigate } from 'react-router-dom';

// const cityArray=['MUMBAI','BANGALORE','DELHI','KOLKATA','AHMEDABAD','GOA']

export default function UpperSection() {
    const [text,setText]=useState('')
    const [date,setDate]=useState('')
    // const [suggestion,setSuggestion]=useState([])
    const {dataLoaded}=useSelector(state=>state.attraction)
    // console.log(dataLoaded);
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        // console.log(e.target.value)
         setText(e.target.value)
    }
    // console.log(date);

    const handleSearch=()=>{
        if(!text){
            return 
        }
       dispatch(getCityData(text))
        // console.log("inside handle search");
    }
    useEffect(()=>{
       dispatch(loaded(false))
    },[])

    if(dataLoaded){
        dispatch(loaded(false))
        navigate (`${text}`)
    }
     
    // useEffect(()=>{
    //     if(!text){
    //         setSuggestion([])
    //         return
    //     }
    //     let suggest=cityArray.filter(city=>city.toLowerCase().includes(text.toLowerCase()))
    //     setSuggestion(suggest)
    // },[text])
    // console.log(suggestion);
    // if(dataLoaded){
    //     return navigate(`attractions/${text}`)
    // }
//     const tileDisabled = ({ activeStartDate, date, view }) => {
//             return date < new Date()
//     }
const disablePastDate = () => {
    const today = new Date();
    const dd =today.getDate() + 1
    const mm =today.getMonth() + 1 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

    return (
        <>
           <Box bg='#F5F5F5' w='100%' h="auto" pb='20'>        
                 <VStack>
                 <Text fontWeight={"bold"} fontSize={{base:"27px", md:"30px"}} paddingLeft={{base:58,md:0}} paddingRight={{base:10,md:80}} paddingTop={10}>Find and book a great experience</Text>
                 <Text fontSize="19px" color={"#404010"} paddingLeft={{base:58,md:0}} paddingRight={{base:10,md:60}}>Discover more of your destination and make the most of your trip</Text> 
                 </VStack>
                 <Stack   bgColor={"orange"}  border="2px" borderColor={"orange"} borderRadius={"5px"} direction={{base:"column",md:"row"}} w="70%" style={{marginTop:"27px"}} marginLeft={{base:"15%",md:"19%"}} position='relative'  >
                    <InputGroup>
                    <InputLeftElement  
                        children={ <GiTreeDoor color='green' size={{base:50,md :30}} />}
                    />
                        <Input onChange={handleChange}  border="4px" borderColor={"orange"} borderRadius={"5px"} bgColor={"white"}  p="25px" pl="40px" placeholder='Where are you going' fontSize={15}/>
                    </InputGroup>                   
                      <Input fontSize={15} onChange={(e)=>setDate(e.target.value)} border="4px" borderColor={"orange"} borderRadius={"5px"} bgColor={"white"}  cursor="pointer" type="date" p="25px" pl="40px"                       
                        min={disablePastDate()}
                      />                   
                   <Button fontSize={15} onClick={handleSearch} border="4px" borderColor={"orange"} bg="#006CE4" color="white" p="25px 40px 25px 40px">Search</Button>
                 </Stack>
           </Box>
           <Box style={{borderRadius:"10px",border:"1px solid lightgrey",width:"80%",height:"80px",margin:"auto",marginTop:"40px"}}> 
            <p style={{marginLeft:"10%",paddingTop:"25px" ,display:"flex",gap:"20px"}}><FaInfoCircle color='brown' style={{marginTop:"5px",marginLeft:"-8%"}}/>Please check local guidelines before planning your visit.<span style={{color:"#4F6CE8",cursor:"pointer",marginLeft:"-15px"}}>Read more</span></p>
           </Box>
           <NearByDestination/>
        </>
    )
}