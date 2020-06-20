const initialState ={list :[]};

export default function roomsReducer(state = initialState,action){
    switch(action.type){
        case "FETCH_ROOMS":
            return{...state, list: [...action.payload]};
        default:
            return state;
    }
}