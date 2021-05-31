import { combineReducers } from "redux";
import filterItemsReducer from "./reducers/filterItemsReducer";
import itemsReducer from "./reducers/itemsReducer";

const rootReducer = combineReducers({
    filterItems: filterItemsReducer,
    items: itemsReducer,
})

export default rootReducer;