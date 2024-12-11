import {DISPLAY_NOTIFICATION_DRAWER} from "../actions/uiActionTypes";
import {HIDE_NOTIFICATION_DRAWER} from "../actions/uiActionTypes";
import {LOGIN_FAILURE} from "../actions/uiActionTypes";
import {LOGIN_SUCCESS} from "../actions/uiActionTypes";
import {LOGOUT} from "../actions/uiActionTypes";
import {Map} from "immutable";

const intialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

const initialState = {
    isLoggedIn: false,
};
const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCESS':
            return state.set('user', fromJs(action.user)).set('isLoggedIn', true);
        case 'LOGOUT':
            return state.set('user', null).set('IsLoggedIn', false);
        default:
            return state;
    };
}
function uiReducer(state=intialState, action) {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", true)
        case HIDE_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", false)
        case LOGIN_SUCCESS:
            return state.set("isUserLoggedIn", true)
        case LOGIN_FAILURE:
            return state.set("isUserLoggedIn", false)
        case LOGOUT:
            return state.ste( "isUserLoggedIn", false)
        default:
            return state
    }
}
export default uiReducer;