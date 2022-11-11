import {Box, Button, HStack, Input, InputGroup, Image,InputLeftElement, Stack} from "@chakra-ui/react"
import {FiSearch} from "react-icons/fi"
import {BiChevronRight} from "react-icons/bi"
import {MdTimer} from "react-icons/md"
import {BsCalendarCheck} from "react-icons/bs"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import MostPopular from "./MostPopular"
import LowestPrice from "./LowestPrice"
import "./ListLanding.css"
import OurTopPicks from "./OurTopPicks"
export default function ListLanding(){
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
                    <TabList w="100%">
                        <HStack>
                            <Tab className="hover">Our top picks</Tab>
                            <Tab className="hover">Most popular</Tab>
                            <Tab className="hover">Lowest price</Tab>
                        </HStack>
                    </TabList>
                    <TabPanels>
                        <TabPanel><OurTopPicks/></TabPanel>
                        <TabPanel><MostPopular/></TabPanel>
                        <TabPanel><LowestPrice/></TabPanel>
                    </TabPanels>
                </Tabs>             
                {/* cards starts from here */}
                <Box marginLeft={'-5%'}>  
                    <Stack gap={3}>
                        <Box pr={'10px'} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                             <HStack>
                                <Box w='35%' m={'15px'} >
                                    <Image w='auto' borderRadius={'10px'} src='https://r-xx.bstatic.com/xdata/images/xphoto/300x320/153543155.jpg?k=38cc9e6c286009b4f2cac1432e092ceda83879c4ee306069f47bbfc348d796d3&o='/>
                                </Box>
                                <Box>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>City</p>
                                    <h1 style={{fontWeight:'bold',fontSize:'20px'}}>Two-hour walking and Boat tour at sunrise</h1>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>Witness ans Aarti ceremony, cruise along the Gangas and stroll through Varanasi's ghats</p>
                                    <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> <p>Duration 2 hours</p></HStack></Box>
                                    <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>Free cancellation available</p></HStack></Box>
                                    <p className="rightalign">From <span><h3>Rs. 8634.54</h3></span> </p>
                                    <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                </Box>

                             </HStack>
                        </Box>
                        <Box pr={'10px'} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                             <HStack>
                                <Box w='35%' m={'15px'} >
                                    <Image w='auto' borderRadius={'10px'} src='https://q-xx.bstatic.com/xdata/images/xphoto/max1200/141997817.jpg?k=6b0ce0d36c813d5e57187f823cecafe052826dc9dd12d3d786eebb3f2b3fff82&o='/>
                                </Box>
                                <Box>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>City</p>
                                    <h1 style={{fontWeight:'bold',fontSize:'20px'}}>Two-hour walking and Boat tour at sunrise</h1>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>Witness ans Aarti ceremony, cruise along the Gangas and stroll through Varanasi's ghats</p>
                                    <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> <p>Duration 2 hours</p></HStack></Box>
                                    <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>Free cancellation available</p></HStack></Box>
                                    <p className="rightalign">From <span><h3>Rs. 8634.54</h3></span> </p>
                                    <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                </Box>

                             </HStack>
                        </Box>
                        <Box pr={'10px'} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                             <HStack>
                                <Box w='35%' m={'15px'} >
                                    <Image w='auto' borderRadius={'10px'} src='https://r-xx.bstatic.com/xdata/images/xphoto/300x320/153543155.jpg?k=38cc9e6c286009b4f2cac1432e092ceda83879c4ee306069f47bbfc348d796d3&o='/>
                                </Box>
                                <Box>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>City</p>
                                    <h1 style={{fontWeight:'bold',fontSize:'20px'}}>Two-hour walking and Boat tour at sunrise</h1>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>Witness ans Aarti ceremony, cruise along the Gangas and stroll through Varanasi's ghats</p>
                                    <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> <p>Duration 2 hours</p></HStack></Box>
                                    <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>Free cancellation available</p></HStack></Box>
                                    <p className="rightalign">From <span><h3>Rs. 8634.54</h3></span> </p>
                                    <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                </Box>

                             </HStack>
                        </Box>
                        <Box pr={'10px'} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                             <HStack>
                                <Box w='35%' m={'15px'} >
                                    <Image w='auto' borderRadius={'10px'} src='https://r-xx.bstatic.com/xdata/images/xphoto/300x320/153543155.jpg?k=38cc9e6c286009b4f2cac1432e092ceda83879c4ee306069f47bbfc348d796d3&o='/>
                                </Box>
                                <Box>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>City</p>
                                    <h1 style={{fontWeight:'bold',fontSize:'20px'}}>Two-hour walking and Boat tour at sunrise</h1>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>Witness ans Aarti ceremony, cruise along the Gangas and stroll through Varanasi's ghats</p>
                                    <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> <p>Duration 2 hours</p></HStack></Box>
                                    <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>Free cancellation available</p></HStack></Box>
                                    <p className="rightalign">From <span><h3>Rs. 8634.54</h3></span> </p>
                                    <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                </Box>

                             </HStack>
                        </Box><Box pr={'10px'} w='100%' borderRadius='10px' h='auto' border={'1px solid lightgrey'} cursor='pointer'>
                             <HStack>
                                <Box w='35%' m={'15px'} >
                                    <Image w='auto' borderRadius={'10px'} src='https://q-xx.bstatic.com/xdata/images/xphoto/max1200/141997817.jpg?k=6b0ce0d36c813d5e57187f823cecafe052826dc9dd12d3d786eebb3f2b3fff82&o='/>
                                </Box>
                                <Box>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginTop:'15px'}}>City</p>
                                    <h1 style={{fontWeight:'bold',fontSize:'20px'}}>Two-hour walking and Boat tour at sunrise</h1>
                                    <p style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'15px'}}>Witness ans Aarti ceremony, cruise along the Gangas and stroll through Varanasi's ghats</p>
                                    <Box style={{color:'#1A1A1A',fontSize:'14px',marginBottom:'2px'}}><HStack><MdTimer/> <p>Duration 2 hours</p></HStack></Box>
                                    <Box style={{fontSize:'14px',color:'#008234'}}><HStack><BsCalendarCheck/> <p>Free cancellation available</p></HStack></Box>
                                    <p className="rightalign">From <span><h3>Rs. 8634.54</h3></span> </p>
                                    <Button bg={'#00000'} className="seeAvail">See availability <BiChevronRight/></Button>
                                </Box>

                             </HStack>
                        </Box>
                    </Stack>
                </Box>    
            </Box>

        </HStack>
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