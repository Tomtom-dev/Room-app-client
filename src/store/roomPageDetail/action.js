import axios from 'axios'
import { store } from 'react-notifications-component';


const ROOM_DETAIL_FETCHED = "ROOM_DETAIL_FETCHED";
const NEW_ROOM = "NEW_ROOM"

const roomPageDetail = room => ({
    type: ROOM_DETAIL_FETCHED,
    payload: room
})

const addNewRoom = newRoom => ({
    type: NEW_ROOM,
    payload: newRoom
})

// notification message

function testNotification(){
    store.addNotification({
        type:"success",
        title: "Post send!",
        message: "Your post has been successfully saved and share",
        container:"top-center",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss:{
            duration: 8000,
            showIcon: true
        },
        width:800
    })
}


export const createNewPost =(newPost)=> async (dispatch, getState)=>{
    try{

        const userId= getState().userReducer.id

        const {title, location, description, image}= newPost

        const response = await axios.post(`https://room-for-help.herokuapp.com/room`,{
            title,
            location,
            description,
            image,
            userId
        })
        dispatch(addNewRoom(response.data));
        testNotification();
    }catch(error){
        console.log(error);
    }
}


export const fetchRoomById = (id)=> {
    
    
    return async (dispatch, getState)=>{
        const response =await axios.get(`https://room-for-help.herokuapp.com/room/${id}`)
        dispatch(roomPageDetail(response.data))
    }
}

