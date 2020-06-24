const ROOM_DETAIL_FETCHED = "ROOM_DETAIL_FETCHED";

const initialState= {
    roomSelected: []
}

export default function roomPageDetailReducer (state=initialState, {type, payload}){
    switch(type){
        case ROOM_DETAIL_FETCHED:
            return{...state, ...payload}
            
        default:
            return state;
    }
}