import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import SubscribeLetter from '../../components/AirportTaxi/SubscribeLetter'
import FeaturedProperties from '../../components/Home/FeaturedPropertes/FeaturedProperties'
import Featured from '../../components/Home/Header/Featured'
import Images from '../../components/Home/Image/Images'
import MailList from '../../components/Home/MaiList/MailList'
import PropertyList from '../../components/Home/propertyList/PropertyList'
import Header from '../../components/Home/Top/Header'
import NavbarR from '../../components/Navbar/NavbarR'
import './Home.css'
export default function Home() {
  return (
   <div>
      <Images/>
      <div className="homeContainer">
        
        <Featured/>
        <Box width={"100%"}>
        <Text fontSize={"2xl"} marginBottom='30px' marginLeft={"70px"}>  Browse by property type</Text>
        <PropertyList/>
        </Box>
        <Box >
        <Text fontSize={"2xl"} marginBottom='30px' marginLeft={"70px"}>Homes guests love</Text>
        <FeaturedProperties/>
        </Box>
        <SubscribeLetter/>
        
      </div>
    </div>
 

  )
}
