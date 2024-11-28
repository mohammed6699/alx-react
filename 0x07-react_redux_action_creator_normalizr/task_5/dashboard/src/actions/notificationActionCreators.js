import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export function markasread(index){
    return {
        type: MARK_AS_READ,
        index
    };
}
export function setNotificationFilter(filter){
    return {
        type: SET_TYPE_FILTER,
        filter
    };
}

function bindCreators (dispatch){
    return bindActionCreators ({
        markasread,
        setNotificationFilter,
    }),
    dispatch;
}