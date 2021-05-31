import { combineReducers } from "redux";
import filterItemsReducer from "./reducers/filterItemsReducer";

const rootReducer = combineReducers({
    filterItems: filterItemsReducer
})

export default rootReducer;