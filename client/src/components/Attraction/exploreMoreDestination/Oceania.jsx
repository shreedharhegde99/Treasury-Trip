import { Grid } from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCityData, loaded } from "../../../redux/attractions/attractions.action";

const baseUrl=`https://treasury-trip.up.railway.app`

export default function Oceania(){
    const dispatch=useDispatch()
    const {dataLoaded}=useSelector(state=>state.attraction)
    const [data,setData]=useState([])
    const getData=async()=>{
        try {
            let response=await axios.get(`${baseUrl}/attractions?country=oceania`)
            setData(response.data)
            // console.log(response.data)
            
        } catch (error) {
            console.log(error);
        }    
    }
    const nextPage=()=>{
        dispatch(getCityData("bangalore"));
    }
    useEffect(()=>{
        getData()
        dispatch(loaded(false))
    },[])
    if(dataLoaded){
        return <Navigate to = '/attractionscity'/>
    }
    return (
  
        <Grid  h='auto' w="102%" ml='-4'
                templateColumns={{lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"1fr"}}
                templateRows='repeat(2, 1fr)'
                gap={4}>

                    {
                        data.map((el)=> 
                        <div onClick={nextPage} key={el._id}>
                            <div className="container_san"> 
                            <img src={el.image} alt={el.places} />
                            <p className="text">{el.places}</p>
                            <p className="text2">{el.todo}</p>
                             </div>
                        </div>
                        )
                    }
                
            </Grid>
    
    )
}                                                                       