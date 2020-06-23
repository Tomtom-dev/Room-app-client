
const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null
  };

  export default function userReducer(state = initialState,action) {
      switch(action.type){
        case "LOGIN_SUCCESS":
            localStorage.setItem("token", action.payload.token);
            console.log(state);

            return {...state, ...action.payload};
            
        case "LOG_OUT":
            localStorage.removeItem("token");
            return {...initialState, token:null};

        case "TOKEN_STILL_VALID":
            return { ...state, ...action.payload };
              
        default: return state;

      }
      
  }