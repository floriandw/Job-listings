
const initialState = [];

const filterItemsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    console.log(type);
    console.log(payload)
    switch (type) {
        case "ADD_FILTER_ITEM":
            return [...state, {
                //id: uuidv4(),
                name: payload,           
            }]
        default:
            return state
    }

    
}



export default filterItemsReducer;