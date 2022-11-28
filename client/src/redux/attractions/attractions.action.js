import { ADD_DATA, IS_LOADED } from "./attractions.actiontypes";
import axios from "axios";
import backendURL from "../../network";

export const getCityData = (text) => async (dispatch) => {
  //    console.log("inside getCityData");
  try {
    let response = await axios.get(`${backendURL}/attractions/${text}`);
    // console.log(response.data)
    dispatch({ type: ADD_DATA, payload: response.data });
    dispatch(loaded(true));
  } catch (error) {
    console.log(error);
  }
};

export const loaded = (payload) => ({ type: IS_LOADED, payload });
