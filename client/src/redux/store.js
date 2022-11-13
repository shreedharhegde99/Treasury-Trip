import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./attractions/attractions.reducer";
import { IsAuth } from "./auth/auth.reducer";

const rootReducer = combineReducers({
    attraction: CityReducer,
    Authentication: IsAuth
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
