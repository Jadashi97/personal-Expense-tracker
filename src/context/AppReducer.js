function AppReducer(state, action){
    switch(action.type){
        
        case "GET_TRANSACTIONS":
            return{
                ...state,
                loading: false,
                transactions: action.payload
            }

        default: 
            return state;
    }
}

export default AppReducer;