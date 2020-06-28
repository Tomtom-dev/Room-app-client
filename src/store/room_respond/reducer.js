const initialState= {}

const NEW_MESSAGE="NEW_MESSAGE"


export default function roomRespond (state= initialState,{type,payload}){
    switch(type){
        case NEW_MESSAGE:
           return{...state, ...payload}
        default:
            return state;
}
}