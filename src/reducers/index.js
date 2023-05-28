import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import documentReducer from './document.reducer'

export default combineReducers({
    userReducer,
    documentReducer,
})