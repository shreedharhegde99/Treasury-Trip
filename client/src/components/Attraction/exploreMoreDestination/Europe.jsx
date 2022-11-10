import { Grid } from "@chakra-ui/react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";

export default function Europe(){
    const [data,setData]=useState([])
    const getData=async()=>{
        let response=await axios.get(`http://localhost:8080/posts`)
        
        console.log(response.data)
        setData(response.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (
  
        <Grid  h='auto' w="105%" ml='-4'
                templateColumns={{lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"1fr"}}
                templateRows='repeat(2, 1fr)'
                gap={4}>
                    <div className="container_san"> 
                    <img src="https://q-xx.bstatic.com/xdata/images/city/533x300/684947.jpg?k=ed28ddbf579fa491991e83bfda5904a0bb70041575f1da447677da7c19a930ae&o=" alt="" />

                    {
                        data.map((el)=> <div key={el.id}>
                            <p className="text">{el.title}</p>
                            <p className="text2">{el.author}</p>
                        </div>)
                    }
                
                    </div>
            </Grid>
    
    )
}                                                                       