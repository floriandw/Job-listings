const initialState = [];

const itemsReducer = (state = initialState, action) => {
    const {type, items} = action;

    switch (type) {
        case "ADD_ITEMS": 
            return [...state, 
                items                    
            ]
        
        default:  
            return state
    }
}

export default itemsReducer;