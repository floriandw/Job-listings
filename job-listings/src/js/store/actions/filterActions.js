import * as actionTypes from "./actionsTypes";

export const addFilterItem = (name) => {
    console.log(name)
    return {
        type: actionTypes.ADD_FILTER_ITEM,
        filterName: name
    }
}

export const clearFilterItems = () => {
    return {
        type: actionTypes.CLEAR_FILTERS
        
    }
}

export const removeFilterItem = (name) => {
    return {
        type: actionTypes.REMOVE_FILTER_ITEM,
        filterName: name
    }
}