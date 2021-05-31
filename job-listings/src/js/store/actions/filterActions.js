import * as actionTypes from "./actionsTypes";

export const addShopItem = (name) => {
    console.log(name)
    return {
        type: actionTypes.ADD_FILTER_ITEM,
        payload: name
    }
}