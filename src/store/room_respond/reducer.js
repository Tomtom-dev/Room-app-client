const initialState= { messages :[]}

const NEW_MESSAGE="NEW_MESSAGE"

const ALL_MESSAGE= "ALL_MESSAGE"


export default function roomRespond (state= initialState,action){
    switch(action.type){
        
        case ALL_MESSAGE:
            return{...state, messages :[ ...action.payload]}
        case NEW_MESSAGE:
            return{...state, NewMessage:[...action.payload]}
     
        default:
            return state;
}
}