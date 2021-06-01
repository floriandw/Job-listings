const initialState = [];

const filterItemsReducer = (state = initialState, action) => {
    const {type, filterName} = action;
    
    switch (type) {
        case "ADD_FILTER_ITEM":
            console.log(!state.includes(filterName))
            if (!state.includes(filterName)) {
                return [...state, 
                    filterName,                     
                ]}
            else {
                console.log('wertkke')
                return state
            }
        case "REMOVE_FILTER_ITEM":
            return [...state.filter(x => x !== filterName)]
        case "CLEAR_FILTERS":
            return state = [];
        default:
            return state
    }
}

export default filterItemsReducer;