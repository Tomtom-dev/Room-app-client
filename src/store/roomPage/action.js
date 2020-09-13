import axios from "axios"

const FETCH_ROOMS_REQUEST="FETCH_ROOMS_REQUEST"
const FETCH_ROOMS="FETCH_ROOMS" 
const FETCH_ROOMS_FAIL="FETCH_ROOMS_FAIL"




export const fetchRooms =() => async (dispatch, getState) =>{
    try{
        dispatch({type: FETCH_ROOMS_REQUEST})
        const response = await axios.get("https://room-for-help.herokuapp.com/room")
        dispatch({type :FETCH_ROOMS, payload: response.data})        
    }catch (error){
        dispatch({type:FETCH_ROOMS_FAIL,payload: error.message})
        
    }
}