import * as actionTypes from "./actionsTypes";

export const addFilterItem = (name) => {
    console.log(name)
    return {
        type: actionTypes.ADD_FILTER_ITEM,
        payload: name
    }
}

export const clearFilterItems = (name) => {
    console.log(name)
    return {
        type: actionTypes.CLEAR_FILTERS
    }
}