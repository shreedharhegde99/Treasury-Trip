import { RESET, SET_PRICE, SET_TRAVEL_DATA } from "./taxis.actiontypes";

export const updateTravelData = (payload) => ({
  type: SET_TRAVEL_DATA,
  payload,
});
export const resetTaxiData = () => ({ type: RESET });

export const setPrice = (payload) => ({ type: SET_PRICE, payload });
