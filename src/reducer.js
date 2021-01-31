import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./action";


export const initialState= {isLoggedIn: false, user: null};



const reducer=(state=initialState,action) => {
    const {type,payload} = action;
    switch(type){
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case SIGNUP_FAIL: 
            return {
                ...state,
                isLoggedIn: false
            };
        case LOGIN_SUCCESS: 
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL : 
            return{
                ...state,
                isLoggedIn: false,
                user: null
            }
        case LOGOUT:
             return {
                  ...state,
                  isLoggedIn: false,
                  user: null,
            };
        default:
            return state
    }
};
export default reducer;