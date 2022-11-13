import {Box, Button, HStack, Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import {GiTreeDoor} from "react-icons/gi"
import { FaInfoCircle } from "react-icons/fa";
import NearByDestination from './NearByDestination';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getCityData, loaded } from '../../redux/attractions/attractions.action';
import { useNavigate } from 'react-router-dom';

const cityArray=['MUMBAI','BANGALORE','DELHI','KOLKATA','AHMEDABAD','GOA']

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
    
    return (
        <>
           <Box bg='#F5F5F5' w='100%' h="auto" pb='20'>           
                 <h1 style={{fontSize:"30px",fontWeight:"bold",marginLeft:"20%",paddingTop:"30px"}}>Find and book a great experience</h1>
                 <p  style={{fontSize:"18px",color:"grey",marginLeft:"20%"}}>Discover more of your destination and make the most of your trip</p>
                 <HStack  w="70%" style={{marginTop:"27px",marginLeft:"20%"}} position='relative'  >
                    <InputGroup>
                    <InputLeftElement 
                        children={<GiTreeDoor color='gray.300' size="30px" />}
                    />
                        <Input onChange={handleChange}  border="4px" borderColor={"orange"} borderRadius={"5px"} bgColor={"white"}  p="25px" pl="40px" placeholder='Where are you going'/>
                         {/* <VStack position={'absolute'} top='75px' left={'82px'} bgColor="white" p={"4"}>
                            {suggestion.map((city)=><Box onClick={()=>setText(city.toLowerCase())} key={city}> {city}</Box>)}
                         </VStack> */}

                    </InputGroup>                   
                      <Input onChange={(e)=>setDate(e.target.value)} border="4px" borderColor={"orange"} borderRadius={"5px"} bgColor={"white"}  cursor="pointer" placeholder='Select your dates' type="date" p="25px" pl="40px"/>                   
                   <Button onClick={handleSearch} border="4px" borderColor={"orange"} bg="#006CE4" color="white" p="25px 40px 25px 40px">Search</Button>
                 </HStack>
           </Box>
           <Box style={{borderRadius:"10px",border:"1px solid lightgrey",width:"80%",height:"80px",margin:"auto",marginTop:"40px"}}> 
            <p style={{marginLeft:"10%",paddingTop:"25px" ,display:"flex",gap:"20px"}}><FaInfoCircle color='brown' style={{marginTop:"5px",marginLeft:"-8%"}}/>Please check local guidelines before planning your visit.<span style={{color:"#4F6CE8",cursor:"pointer",marginLeft:"-15px"}}>Read more</span></p>
           </Box>
           <NearByDestination/>
        </>
    )
}