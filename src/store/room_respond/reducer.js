const initialState= { messages :[]}

const NEW_MESSAGE="NEW_MESSAGE"

const ALL_MESSAGE= "ALL_MESSAGE"


export default function roomRespond (state= initialState,{type,payload}){
    switch(type){
        case NEW_MESSAGE:
           return{...state, ...payload}

        case ALL_MESSAGE:
            return{...state, ...payload}
        default:
            return state;
}
}