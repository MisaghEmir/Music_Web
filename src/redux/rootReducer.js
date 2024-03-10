import { combineReducers } from "redux";
import { menuReducer } from "./menu/menuReducer";



const rootReducer = combineReducers({
    menuReducer: menuReducer,
})

export default rootReducer