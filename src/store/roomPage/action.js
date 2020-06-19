import axios from "axios"
import { fetchArtworks } from "../../../../../../Heart-Work/Heart-Work-client/src/store/homepages/action"

export const saveRooms = rooms =>({
    type:"FETCH_ROOMS",
    payload: rooms,
})

export const fetchRooms =() => async (dispatch, getState) =>{
    try{
        const response = await axios.get("http://localhost:4000/")
        dispatch(saveRooms(response.data))
        console.log(response.data);
        
    }catch (error){
        console.log(error);
    }
}