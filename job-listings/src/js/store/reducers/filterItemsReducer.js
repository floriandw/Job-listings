
const initialState = [];

const filterItemsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    console.log(state)
    switch (type) {
        case "ADD_FILTER_ITEM":
            //if (!state.includes(payload)) {
                return [...state, [
                    //id: uuidv4(),
                    payload,           
                ]]//}
            //else {
               // return state
            //}
        case "CLEAR_FILTERS":
            return state = [];
        default:
            return state
    }

    
}



export default filterItemsReducer;