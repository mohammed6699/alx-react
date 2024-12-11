export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const DISPLAY_NOTIFICATION_DRAWER = "DISPLAY_NOTIFICATION_DRAWER";
export const HIDE_NOTIFICATION_DRAWER = "HIDE_NOTIFICATION_DRAWER";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

function loginSuccess (){
    return {
        type: LOGIN_SUCCESS
    }
}
function loginFailure(){
    return {
        type: LOGIN_FAILURE
    }
}
function loginRequest(email, password) {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: (email, password)
        });
        try {
            const response = await fetch('login-success.jspn');
            if (response.ok){
                    dispatch(loginSuccess())
            }else{
                dispatch(loginFailure())
            }
        }catch (error){
            console.log(error);
        }
    }
}