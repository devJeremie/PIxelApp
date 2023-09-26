import { createStore, combineReducers } from "redux";
import appReducer from "./reducers/appReducer";

//création du combineReducer si besoin de plusieurs reducer
//on recupere les donnees de initialState dans appReducer
const rootReducer = combineReducers({
    users: appReducer
    
});
const store = createStore(rootReducer);

export default store;