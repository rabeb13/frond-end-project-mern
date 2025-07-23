// 1 import les types


const {
    SUCC_USER,
    FAIL_USER,
    LOAD_USER,
    LOGOUT_USER,
    CURRENT_USER,
} = require('../ActionsType/user');

// 2 initState
const initState = {
    user: null,
    loadUser: false,
    errors: [],
    isAuth: false,
};

// 3 pure function
const userReducer = (state = initState, { type, payload} ) => {
    switch (type) {
case LOAD_USER:
    return { ...state, loadUser: true };
case SUCC_USER:
    localStorage.setItem("token", payload.token);
    return { ...state, loadUser: false, user: payload.user, isAuth:true};
case FAIL_USER: 
    return { ...state, loadUser: false , errors: payload};
case CURRENT_USER:
    return { ...state, loadUser: false, user: payload, isAuth: true};
    
case LOGOUT_USER:
    localStorage.removeItem("token");
return { ...state, loadUser: false, errors: [], isAuth: false };
default:
    return state;   
}
};

export default userReducer;