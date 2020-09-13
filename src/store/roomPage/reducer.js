const initialState ={list :[]};

const FETCH_ROOMS_REQUEST="FETCH_ROOMS_REQUEST"
const FETCH_ROOMS="FETCH_ROOMS" 
const FETCH_ROOMS_FAIL="FETCH_ROOMS_FAIL"


export default function roomsReducer(state = initialState,action){
    switch(action.type){
        case FETCH_ROOMS_REQUEST: 
            return {loading: true, list: []};
        case FETCH_ROOMS:
            return{loading:false, list: [...action.payload]};
        case FETCH_ROOMS_FAIL:
            return {loading:false, error: action.payload }
        default:
            return state;
    }
}