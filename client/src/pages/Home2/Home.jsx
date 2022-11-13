import React from 'react'
import FeaturedProperties from '../../components/Home/FeaturedPropertes/FeaturedProperties'
import Featured from '../../components/Home/Header/Featured'
import Images from '../../components/Home/Image/Images'
import MailList from '../../components/Home/MaiList/MailList'
import PropertyList from '../../components/Home/propertyList/PropertyList'
import Header from '../../components/Home/Top/Header'
import './Home.css'
export default function Home() {
  return (
   <div>
 
    
 
   
      <Images/>
      <div className="homeContainer">
        <Featured/>
         <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        
      </div>
    </div>
 

  )
}
