import { Box, Grid, HStack, Stack } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import "./NearByDestination.css"
import {GiTreeDoor} from "react-icons/gi"
import {BsCalendar2CheckFill} from "react-icons/bs"
import {FaHeadset}from "react-icons/fa"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Africa from "./exploreMoreDestination/Africa";
import Caribean from "./exploreMoreDestination/Caribean";
import CentralAmerica from "./exploreMoreDestination/CentralAmerica";
import Dceania from "./exploreMoreDestination/Dceania";
import Europe from "./exploreMoreDestination/Europe";
import MiddleEast from "./exploreMoreDestination/MiddelEast";
import NorthAmerica from "./exploreMoreDestination/NorthAmerica";
import SouthAmerica from "./exploreMoreDestination/SouthAmerica";
import Asia from "./exploreMoreDestination/Asia";
export default function NearByDestination() {
    return (
        <>
           <h1 style={{fontSize:"20px",fontWeight:"bold" ,marginTop:"20px",marginLeft:"10%"}}>Nearby Destination</h1>
           <Box style={{marginLeft:"10%",marginTop:"10px"}}>
               <Grid  h='200px' w="90% "
                    templateColumns={{lg:"repeat(3,1fr)",md:"repeat(2,1fr)",sm:"1fr"}}
                    templateRows='repeat(2, 1fr)'
                    gap={4}>
                     <div style={{border:"5px solid red",borderRadius:"10px",height:"180px"}}>sandeep</div>
                     <div style={{border:"5px solid red",borderRadius:"10px",height:"180px"}}>gond</div>
                     <div style={{border:"5px solid red",borderRadius:"10px",height:"180px"}}>ashish</div>   
                     <div style={{border:"5px solid red",borderRadius:"10px",height:"180px"}}>ashish</div>     
               </Grid>
           </Box> <br /><br /><br /><br /><br /><br /><br />
           <div style={{borderRadius:"10px",border:"1px solid lightgrey",width:"80%",height:"120px",margin:"auto",marginTop:"40px",marginBottom:"10px"}}> 
            <h1  style={{fontSize:"16px",fontWeight:"bold",marginLeft:"2%",marginTop:"10px"}}>Sign in to save time</h1>
            <p style={{marginLeft:"2%",paddingTop:"5px"}}>Your Booking.com account lets you book using your saved details <br /><br /><Link to="/signIn"><span style={{color:"#4F6CE8",cursor:"pointer",marginLeft:"-15px",marginLeft:".1%"}}>Sign in</span></Link></p>
           </div><br />
           <hr className="hr"/>          
           {/* <h1 style={{fontSize:"20px",fontWeight:"bold" ,marginTop:"20px",marginLeft:"10%",paddingBottom:"10px"}}>We've got you covered</h1>
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
                    <BsCalendar2CheckFill className="tree" fontSize={"3rem"}/>
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
           </Grid> */}
           {/* <br /><br />
           <hr className="hr"/>  <br />
           <h1 style={{fontSize:"20px",fontWeight:"bold",marginLeft:"10%"}}>Explore more destinations</h1>
           <p style={{marginLeft:"10%",paddingTop:"1px"}}>Find things to do in cities around the world</p>
           <br /> */}
           {/* <Tabs width={'80%'} marginLeft="10%">
                <TabList>
                    <Tab>Europe</Tab>
                    <Tab>North America</Tab>
                    <Tab>Asia</Tab>
                    <Tab>Africa</Tab>
                    <Tab>Dceania</Tab>
                    <Tab>Middle East</Tab>
                    <Tab>South America</Tab>
                    <Tab>Caribean</Tab>
                    <Tab>Central America</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel><Europe/></TabPanel>
                    <TabPanel><NorthAmerica/></TabPanel>
                    <TabPanel><Asia/></TabPanel>
                    <TabPanel><Africa/></TabPanel>
                    <TabPanel><Dceania/></TabPanel>
                    <TabPanel><MiddleEast/></TabPanel>
                    <TabPanel><SouthAmerica/></TabPanel>
                    <TabPanel><Caribean/></TabPanel>
                    <TabPanel><CentralAmerica/></TabPanel>
                </TabPanels>
            </Tabs>
                         */}
           
        </>
    )
}