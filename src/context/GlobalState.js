import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


// initial State 
const initialState = {
    transactions : [],
    // error: null,
    // loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({

})