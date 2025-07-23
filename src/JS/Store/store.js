// 1 import createstore
import { createStore, applyMiddleware, compose } from 'redux';



 // 2 import rootReducer 
import rootReducer from '../Reducers';

// 3 import thunk
//🔹 redux-thunk est un middleware Redux qui permet de gérer des actions asynchrones (comme des requêtes API, des setTimeout, etc.).
//Pourquoi ? Parce que Redux attend un objet, pas une fonction.
//Grâce à redux-thunk, Redux comprend que tu veux faire une opération asynchrone, puis dispatcher d’autres actions ensuite.
import {thunk} from 'redux-thunk';


// 4 pour te voir tes actions, ton state, le time travel dans "inspecter" : telecharger l'extension redux devtools
// composeEnhancers est une fonction redux qui combine des enhancers comme applyMiddleware 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store
const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export
export default store;