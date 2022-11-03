import { type } from "../types/type";

const initialState = {
    logged: false,
}

export const authReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case type.login:
            return {
                ... state, 
                logged: true,
                user: action.payload,
            };
            
        case type.logout:
            return {
                logged: true,
            };
    
        default:
            return state;
    }



}