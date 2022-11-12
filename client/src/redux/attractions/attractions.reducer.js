import {ADD_DATA, IS_LOADED} from "./attractions.actiontypes"

const initState={
    cityData:[],
    dataLoaded:false
}

export const CityReducer=(state=initState,{type,payload})=>{   
    switch (type) {
        case ADD_DATA:{
            return {
                ...state,
                cityData:payload
            }
        }   
        case IS_LOADED:{
            return {
                ...state,
                dataLoaded:payload
            }
        }
        default:{
            return state
        }
            
    }
}