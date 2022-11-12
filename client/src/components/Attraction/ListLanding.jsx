import {Box, Button, HStack, Input, InputGroup, Image,InputLeftElement, Stack} from "@chakra-ui/react"
import {FiSearch} from "react-icons/fi"
import {BiChevronRight} from "react-icons/bi"
import {MdTimer} from "react-icons/md"
import {BsCalendarCheck} from "react-icons/bs"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import "./ListLanding.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCityData } from "../../redux/attractions/attractions.action"
export default function ListLanding(){
    const {cityData}=useSelector(state=>state.attraction)
    const [data,setData]=useState(cityData)

    const dispatch=useDispatch()
    // console.log(dataLoaded);

    
    const handleSearch=()=>{
        dispatch(getCityData("Bangalore"))
        // setData(cityData)
         console.log("inside handle search");
     }

    useEffect(()=>{
        handleSearch()
    },[])

    useEffect(()=>{
         setData(cityData) 
    },[cityData])

    const sortLowToHigh=()=>{
        let updatedData=[...data].sort((a,b)=>{
            let [Rs,price]=a.price.trim().split('.')
            let [rs,prices]=b.price.trim().split('.')
            price=price.split(",").join("");
            prices=prices.split(",").join("");
                console.log(Number(price),Number(prices))
            
             return Number(price)-Number(prices)

        })
        setData(updatedData)
    }
    console.log(data)

    return (
       <Box>
         <HStack align={'start'}>  
            {/* Left-Box */}
            <Box mt={'100px'} ml={'10%'} mr={'5%'} w="28%">
                <Box border="4px" borderColor={"orange"} borderRadius={'10px'}>
                    <InputGroup>
                        <InputLeftElement><FiSearch/></InputLeftElement>
                        <Input  placeholder="Museum, tours,activities..."/>
                    </InputGroup>
                    <Input type="date"/>
                    <Button  border="2px" borderColor={"orange"} color="white" bg={'#006CE4'} pl={'42.5%'} pr={'42.5%'}>Search</Button>
                </Box><br />

                <Box border={'1px solid lightgrey'} h='auto' borderRadius={'10px'} pl="5%">
                    <h1 style={{fontWeight:'bold',fontSize:'16px',marginTop:'5%'}}>Filter</h1><br />
                    <hr style={{marginLeft:'-5%'}} />
                    <h1 style={{fontWeight:'500',fontSize:'15px',color:'#1A1A1A',marginTop:'5%'}}>Category</h1>
                    <HStack>
                        <input type="checkbox" /> <h1>Tours</h1>                              
                    </HStack>
                    <HStack>
                        <input type="checkbox" /> <h1>Activities</h1> 
                    </HStack> 
                    <h1 style={{fontWeight:'500',fontSize:'15px',color:'#1A1A1A',marginTop:'5%'}}>Price</h1>
                    <HStack>
                        <input type="checkbox" /> <h1>Rs 0 - Rs 1,634</h1>                              
                    </HStack>
                    <HStack>
                        <input type="checkbox" /> <h1>Rs 0 - Rs 1,634</h1> 
                    </HStack> 
                    <HStack>
                        <input type="checkbox" /> <h1>Rs 0 - Rs 1,634</h1>                              
                    </HStack>
                    <HStack>
                        <input type="checkbox" /> <h1>Rs 0 - Rs 1,634</h1> 
                    </HStack> 
                    <h1 style={{fontWeight:'500',fontSize:'15px',color:'#1A1A1A',marginTop:'5%'}}>Other</h1>
                    <HStack>
                        <input type="checkbox" /> <h1>Free cancellation</h1>                              
                    </HStack><br />
                </Box>
            </Box>
            {/* right box */}
            <Box w="50%" pt={'100px'} >
              
               <Tabs variant='soft-rounded' colorScheme='white' marginLeft={'-5%'}>
                    <TabList w="100%" mt={'-10px'}>
                        <HStack>
                            <Tab className="hover">Our top picks</Tab>
                            <Tab className="hover">Most popular</Tab>
                            <Tab onClick={sortLowToHigh} className="hover">Lowest price</Tab>
                        </HStack>
                    </TabList>
                    {/* <TabPanels>
                        <TabPanel><OurTopPicks/></TabPanel>
                        <TabPanel><MostPopular/></TabPanel>
                        <TabPanel><LowestPrice/></TabPanel>
                    </TabPanels> */}
                </Tabs>             
                {/* cards starts from here */}
                <Box marginLeft={'-7%'} mt={'5px'}>  
                    <Stack gap={3}>
                                {
                                    cityData.map((el)=>{
                                    return  <Box key={el._id} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                                        <HStack>
                                            <Box w='25%' m={'15px'} >
                                                <Image w='100%' borderRadius={'10px'} src={el.image}/>
                                            </Box>
                                            <Box w='70%'>
                                                <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>{el.city}</p>
                                                <h1 style={{fontWeight:'bold',fontSize:'20px'}}>{el.title}</h1>
                                                <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>{el.desc}</p>
                                                <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> {el.duration}?<p>Duration 2 hours</p>:''</HStack></Box>
                                                <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>{el.cancellation}</p></HStack></Box>
                                                <Box className="rightalign">From <span><p>{el.price}</p></span> </Box>
                                                <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                            </Box>
    
                                        </HStack>
                                    </Box>
                                   })
                                }
                             
                       
                    </Stack>
                </Box>    
            </Box>

        </HStack>
        <br />
       </Box>

        
           
    )
}

  // <Box w="90%" ml={'10%'} border={'1px'} mt={'10%'}>
        //     <HStack>


        //          <Box>  
        //                <Stack>

        //                <Box w='100%' h='250px' border={'1px solid red'}></Box>
        //                <Box w='100%' h='250px' border={'1px solid red'}></Box>
        //                <Box></Box>
        //                </Stack>
        //         </Box>