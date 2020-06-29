import axios from 'axios'
import { InputGroupText } from 'reactstrap'
import { useSelector } from "react-redux";
import {selectRoomDetails} from "../roomPageDetail/selector"
import { fetchRoomById } from '../roomPageDetail/action';

const NEW_MESSAGE="NEW_MESSAGE"
const ALL_MESSAGE= "ALL_MESSAGE"

const addNewMessage = newMess =>({
    type: NEW_MESSAGE,
    payload: newMess
})

const showAllMessages = AllMess =>({
    type: ALL_MESSAGE,
    payload: AllMess
})

// create a new message



export const createNewMessage = (newMessage) =>async (dispatch,getState)=>{
    try{
        
        const userId= getState().userReducer.id
        
        const roomId=getState().roomPageDetailReducer.roomSelected.id

        const {message}= newMessage;

        const response=  await axios.post('http://localhost:4000/roomrespond',{
            message,
            userId,
            roomId
        })
        dispatch(addNewMessage(response.data))
    }catch(error){
        console.log(error);
    }
}

export const getAllMessages = () => async (dispatch, getState) =>{
    try{
        const id = getState().roomPageDetailReducer.roomSelected.id
        console.log('logue', id);
        
        const response = await axios.get(`http://localhost:4000/roomrespond/${id}`)
        
        dispatch(showAllMessages(response.data))
    }catch(error){
        console.log(error);
        
    }
}