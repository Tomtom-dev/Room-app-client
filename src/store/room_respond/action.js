import axios from 'axios'
import { store } from 'react-notifications-component';

const NEW_MESSAGE="NEW_MESSAGE"
const ALL_MESSAGE= "ALL_MESSAGE"

function messageSendNotification(){
    store.addNotification({
        type:"success",
        title: "you message is sent !",
        message: "Your message has been successfully sent",
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

        const response=  await axios.post('https://room-for-help.herokuapp.com/roomrespond',{
            message,
            userId,
            roomId
        })
        messageSendNotification()
        dispatch(addNewMessage(response.data))
    }catch(error){
        console.log(error);
    }
}

export const getAllMessages = () => async (dispatch, getState) =>{
    try{
        const id = getState().roomPageDetailReducer.roomSelected.id
        
        const response = await axios.get(`https://room-for-help.herokuapp.com/roomrespond/${id}`)
        
        dispatch(showAllMessages(response.data))
    }catch(error){
        console.log(error);
        
    }
}