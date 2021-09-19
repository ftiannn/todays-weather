import { combineReducers } from "redux";
import {searchReducer} from "./reducers/search";

export const rootReducer = combineReducers({search: searchReducer})