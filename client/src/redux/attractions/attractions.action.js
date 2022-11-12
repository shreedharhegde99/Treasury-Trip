import { ADD_DATA, IS_LOADED } from "./attractions.actiontypes";
import axios from 'axios';
export const getCityData=(text)=>async(dispatch)=>{
       console.log("inside getCityData");
        try {
            let response=await axios.get(`https://treasury-trip.up.railway.app/attractions/${text}`)           
            console.log(response.data)
            dispatch({type:ADD_DATA,payload:response.data})
            dispatch({type:IS_LOADED,payload:true})
        } catch (error) {
            console.log(error);
        }
        
    
}

export const loaded=(payload)=>({type:IS_LOADED,payload})
