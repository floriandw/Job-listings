import * as actionsTypes from "./actionsTypes";

export const addItem = (items) => {
    return {
        type: actionsTypes.ADD_ITEMS,
        items: items
    }
}