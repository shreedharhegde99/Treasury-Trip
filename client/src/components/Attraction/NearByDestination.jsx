import { Box, Grid, HStack, Stack } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import "./NearByDestination.css"
import {GiTreeDoor} from "react-icons/gi"
import {BsCalendarCheck} from "react-icons/bs"
import {FaHeadset}from "react-icons/fa"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Africa from "./exploreMoreDestination/Africa";
import Caribbean from "./exploreMoreDestination/Caribbean";
import CentralAmerica from "./exploreMoreDestination/CentralAmerica";
import Oceania from "./exploreMoreDestination/Oceania";
import Europe from "./exploreMoreDestination/Europe";
import MiddleEast from "./exploreMoreDestination/MiddelEast";
import NorthAmerica from "./exploreMoreDestination/NorthAmerica";
import SouthAmerica from "./exploreMoreDestination/SouthAmerica";
import Asia from "./exploreMoreDestination/Asia";

export default function NearByDestination() {
    return (
        <>
           <h1 style={{fontSize:"20px",fontWeight:"bold" ,marginTop:"20px",marginLeft:"10%"}}>Nearby Destination</h1>
           <Box h={{sm:'10%',md:'90%',lg:'30%'}} style={{marginLeft:"10%",marginTop:"10px"}}>
               <Grid w="90% "
                    templateColumns={{lg:"repeat(3,1fr)",md:"repeat(2,1fr)",sm:"1fr"}}
                    templateRows='repeat(2, 1fr)'
                    gap={5}
                    >
                     <div className="container_san"> 
                       <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/684947.jpg?k=ed28ddbf579fa491991e83bfda5904a0bb70041575f1da447677da7c19a930ae&o=" alt="" />
                       <p className="text">Varanasi</p>
                       <p className="text2">61 things to do</p>
                     </div>
                     <div className="container_san">
                        <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/684585.jpg?k=cf7431f21987c186a41c2edda00649ac798362916425c8a0c9f12618be8fe66a&o=" alt="" />
                        <p className="text">Kolkata</p>
                       <p className="text2">18 things to do</p>
                     </div>
                     <div className="container_san">
                        <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/975528.jpg?k=c9b9e6ccd083ca729fafc19f19a61be389da4a39a443af8aa71a5a368e90f1e2&o=" alt="" />
                        <p className="text">Old Goa</p>
                       <p className="text2">19 things to do</p>
                     </div>   
                     <div className="container_san">
                        <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/684508.jpg?k=3a3827f08b7ca1d3601ab005b5137924140e379ae46179e706669eeb900da0f0&o=" alt="" />
                        <p className="text">Agra</p>
                       <p className="text2">64 things to do</p>
                     </div>     
               </Grid>
           </Box> <br /><br /><br /><br /><br /><br /><br />
           <div style={{borderRadius:"10px",border:"1px solid lightgrey",width:"80%",height:"120px",margin:"auto",marginTop:"-120px",marginBottom:"10px"}}> 
            <h1  style={{fontSize:"16px",fontWeight:"bold",marginLeft:"2%",marginTop:"10px"}}>Sign in to save time</h1>
            <p style={{marginLeft:"2%",paddingTop:"5px"}}>Your Booking.com account lets you book using your saved details <br /><br /><Link to="/signIn"><span style={{color:"#4F6CE8",cursor:"pointer",marginLeft:".1%"}}>Sign in</span></Link></p>
           </div><br />
           <hr className="hr"/>          
           <h1 style={{fontSize:"20px",fontWeight:"bold" ,marginTop:"20px",marginLeft:"10%",paddingBottom:"10px"}}>We've got you covered</h1>
           <Grid w="80%" margin={"auto"} 
                    templateColumns={{lg:"repeat(3,1fr)",md:"repeat(2,1fr)",sm:"1fr"}}
                    gap={7}>
              <Box >
                <HStack>
                    <GiTreeDoor className="tree" fontSize={"3rem"}/>
                    <Stack>
                    <h4 style={{fontWeight:"bold",fontSize:".9rem"}}>Explore top attractions </h4>
                    <p style={{color:"#1a1a1a",fontSize:"14px",marginTop:"-1px",lineHeight:"20px"}}> Experience the best of your destination, with attractions, tours, activities and more</p>
                    </Stack>
                </HStack>
              </Box>
              <Box>
                <HStack>
                    <BsCalendarCheck className="tree" fontSize={"3rem"}/>
                    <Stack>
                    <h4 style={{fontWeight:"bold",fontSize:".9rem"}}>Fast and flexible </h4>
                    <p style={{color:"#1a1a1a",fontSize:"14px",marginTop:"-1px",lineHeight:"20px"}}> Book tickets online in minutes, with free cancellation on many attractions</p>
                    </Stack>
                </HStack>
              </Box>
              <Box>
                <HStack>
                    <FaHeadset className="tree" fontSize={"3rem"}/>
                    <Stack>
                    <h4 style={{fontWeight:"bold" ,fontSize:".9rem"}}>Support when you need it </h4>
                    <p style={{color:"#1a1a1a",fontSize:"14px",marginTop:"-1px",lineHeight:"20px"}}> Experience the best of your destination, with attractions, tours, activities and more</p>
                    </Stack>
                </HStack>
              </Box>
           </Grid>
           <br /><br />
           <hr className="hr"/>  <br />
           <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"10%"}}>Explore more destinations</h1>
           <p style={{marginLeft:"10%",paddingTop:"1px"}}>Find things to do in cities around the world</p>
           <br />
           {/* overflowX="scroll" */}
           <Tabs overflow="scroll" width={'80%'} marginLeft="10%">
                <TabList>
                    <Tab>Europe</Tab>
                    <Tab>North America</Tab>
                    <Tab>Asia</Tab>
                    <Tab>Africa</Tab>
                    <Tab>Oceania</Tab>
                    <Tab>Middle East</Tab>
                    <Tab>South America</Tab>
                    <Tab>Caribbean</Tab>
                    <Tab>Central America</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><Europe/></TabPanel>
                    <TabPanel><NorthAmerica/></TabPanel>
                    <TabPanel><Asia/></TabPanel>
                    <TabPanel><Africa/></TabPanel>
                    <TabPanel><Oceania/></TabPanel>
                    <TabPanel><MiddleEast/></TabPanel>
                    <TabPanel><SouthAmerica/></TabPanel>
                    <TabPanel><Caribbean/></TabPanel>
                    <TabPanel><CentralAmerica/></TabPanel>
                </TabPanels>
            </Tabs>
                                  
        </>
    )
}