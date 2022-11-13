import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./attractions/attractions.reducer";
import { IsAuth } from "./auth/auth.reducer";
import taxiReducer from "./taxis/taxis.reducer";

const rootReducer = combineReducers({
  attraction: CityReducer,
  Authentication: IsAuth,
  taxiData: taxiReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
