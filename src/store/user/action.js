import axios from "axios"
import { store } from 'react-notifications-component';


const loginSuccess = userWithToken => {
    return {
      type: "LOGIN_SUCCESS",
      payload: userWithToken
    };
  };

  const clearMessage = () => ({ type: "CLEAR_MESSAGE" });

  const setMessage = (variant, dismissable, text) => {
    return {
      type: "SET_MESSAGE",
      payload: {
        variant,
        dismissable,
        text
      }
    };
  };

  const showMessageWithTimeout = (
    variant,
    dismissable,
    text,
    timeOutMilliSeconds
  ) => {
    return dispatch => {
      dispatch(setMessage(variant, dismissable, text));
  
      const timeout = timeOutMilliSeconds || "DEFAULT_MESSAGE_TIMEOUT";
  
      setTimeout(() => dispatch(clearMessage()), timeout);
    };
  };

  // notification message when account created

  function accountCreatedNotification(){
    store.addNotification({
        type:"success",
        title: "Registration done!",
        message: "Your profil has been successfully created, check your emails",
        container:"top-center",
        insert: "top",
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss:{
            duration: 8000,
            showIcon: true
        },
        width:800
    })
}

  export const login = (email,password,history) =>{
      return async (dispatch,getState)=>{
        try {
           const response = await axios.post(`https://room-for-help.herokuapp.com/login`,{
               email,
               password
           })

           dispatch(loginSuccess(response.data))
           history.push("/rooms")
           dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      } catch (error){
        if(error.response){
            console.log(error.response.data.message);
            dispatch(setMessage("danger", true, error.response.data.message));
          } else {
            console.log(error.message);
            dispatch(setMessage("danger", true, error.message));
          }
          
      }
  }
}

export const logOut = () => ({ type: "LOG_OUT" });

export const signUp = (name, email, password,age) => {
  return async (dispatch, getState) => {
    
    try {
      const response = await axios.post(`https://room-for-help.herokuapp.com/signup`, {
        name,
        email,
        password,
        age
      });
      console.log('search',response);
      
      dispatch(loginSuccess(response.data));
      accountCreatedNotification()
      dispatch(showMessageWithTimeout("success", true, "account created"));
      ;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      
    }
  };
};