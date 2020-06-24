const ROOM_DETAIL_FETCHED = "ROOM_DETAIL_FETCHED";
const NEW_ROOM = "NEW_ROOM"

const initialState= {
    roomSelected: []
}

export default function roomPageDetailReducer (state=initialState, {type, payload}){
    switch(type){
        case ROOM_DETAIL_FETCHED:
            return{...state, ...payload}

        case NEW_ROOM:
            return{...state, ...payload}
            
        default:
            return state;
    }
}