import { combineReducers } from "redux";
import roomsReducer from './roomPage/reducer'
import userReducer from './user/reducer'
import roomPageDetailReducer from './roomPageDetail/reducer'



export default combineReducers({
    roomsReducer,
    roomPageDetailReducer,
    userReducer
})