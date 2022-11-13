import { RESET, SET_PRICE, SET_TRAVEL_DATA } from "./taxis.actiontypes";

const initState = {
  from: "",
  to: "",
  date: "",
  hours: "",
  mins: "",
  price: "",
};

const taxiReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_TRAVEL_DATA:
      return {
        ...state,
        ...payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: payload,
      };
    case RESET:
      return {
        ...state,
        ...initState,
      };

    default:
      return state;
  }
};

export default taxiReducer;
