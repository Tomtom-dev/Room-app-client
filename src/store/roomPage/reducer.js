const initialState ={list :[]};

export default function roomsReducer(state = initialState,action){
    switch(action.type){
        case "FETCH_ROOMS_REQUEST": 
            return {loading: true};
        case "FETCH_ROOMS":
            return{loading:false, list: [...action.payload]};
        case "FETCH_ROOMS_FAIL":
            return {loading:false, error:action.payload }
        default:
            return state;
    }
}