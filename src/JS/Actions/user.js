import {
    LOAD_USER,
    SUCC_USER,
    FAIL_USER,
    CURRENT_USER,
    LOGOUT_USER,
} from '../ActionsType/user';
import axios from 'axios';

export const register = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", newUser);
        dispatch({ type: SUCC_USER, payload: result.data });
    } catch (error) {
dispatch({
  type: FAIL_USER,
  payload: error.response?.data?.msg || error.message
});    }
    };


    export const login = (user) => async (dispatch) => {
        dispatch({ type: LOAD_USER });
        try {
            let result = await axios.post("/api/user/login", user);
            dispatch({ type: SUCC_USER, payload: result.data});
        } catch (error) {
            dispatch({ type: FAIL_USER, payload: error.response });

        }
        };
    

    export const logout = () => async (dispatch) => {
        dispatch({type: LOGOUT_USER });
    };

    export const current = () => async (dispatch) => {
        dispatch({ type: LOAD_USER });
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
        
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
        } catch (error) {
            dispatch({ type: FAIL_USER, payload: error.response});
        }
        };
