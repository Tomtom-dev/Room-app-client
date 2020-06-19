const initialState ={};

export default function roomsReducer(state = initialState,action){
    switch(action.type){
        case "FETCH_ROOMS":
            return{...state, all :[...action.payload]};
        default:
            return state;
    }
}