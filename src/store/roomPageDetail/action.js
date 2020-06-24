import axios from 'axios'


const ROOM_DETAIL_FETCHED = "ROOM_DETAIL_FETCHED";

const roomPageDetail = room => ({
    type: ROOM_DETAIL_FETCHED,
    payload: room
})



export const fetchRoomById = id => {
    
    return async (dispatch, getState)=>{
        const response =await axios.get(`http://localhost:4000/${id}`)
        dispatch(roomPageDetail(response.data))
    }
}