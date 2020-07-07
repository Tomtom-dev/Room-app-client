import axios from "axios"


export const saveRooms = rooms =>({
    type:"FETCH_ROOMS",
    payload: rooms,
})

export const fetchRooms =() => async (dispatch, getState) =>{
    try{
        const response = await axios.get("https://room-for-help.herokuapp.com/room")
        dispatch(saveRooms(response.data))
        
        
    }catch (error){
        console.log(error);
    }
}