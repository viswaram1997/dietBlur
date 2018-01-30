import {combineReducers} from "redux";
import Authentication from "./Authentication";
import UserPage from "./UserPage";

export const reducers = combineReducers({
    'Authentication':Authentication,
    'UserPage':UserPage
})