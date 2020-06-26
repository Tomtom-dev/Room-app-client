import { combineReducers } from "redux";
import roomsReducer from './roomPage/reducer'
import userReducer from './user/reducer'



export default combineReducers({
    roomsReducer,
    userReducer
})