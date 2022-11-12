import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./attractions/attractions.reducer";

const rootReducer = combineReducers({
    attraction:CityReducer
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
