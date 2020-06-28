import axios from 'axios'

const NEW_MESSAGE="NEW_MESSAGE"

const addNewMessage = newMess =>({
    type: NEW_MESSAGE,
    payload: newMess
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