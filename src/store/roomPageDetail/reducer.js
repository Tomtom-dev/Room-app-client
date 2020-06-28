const ROOM_DETAIL_FETCHED = "ROOM_DETAIL_FETCHED";
const NEW_ROOM = "NEW_ROOM"
const NEW_MESSAGE="NEW_MESSAGE"

const initialState= {
    roomSelected: []
}

export default function roomPageDetailReducer (state=initialState, {type, payload}){
    switch(type){
        case ROOM_DETAIL_FETCHED:
            return{...state, ...payload}

        case NEW_ROOM:
            return{...state, ...payload}

        case NEW_MESSAGE:
            return{...state,...payload}
            
        default:
            return state;
    }
}