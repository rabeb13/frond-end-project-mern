import { combineReducers } from 'redux';
import userReducer from './user';
import productReducer from './product';

// Combine all reducers into a root reducer
//Elle permet de combiner plusieurs reducers en un seul (par exemple : userReducer, productReducer, etc.).
//Tu crées un rootReducer, qui regroupe tous tes reducers.
//Tu donnes un nom au state géré par userReducer.

const rootReducer = combineReducers({ userReducer, productReducer });

export default rootReducer;