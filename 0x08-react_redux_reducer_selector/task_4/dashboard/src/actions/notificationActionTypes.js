export const MARK_AS_READ = "MARK_AS_READ";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";
export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
export const SELECT_COURSE = "SELECT_COURSE";
export const UNSELECT_COURSE = "UNSELECT_COURSE";

export const NotificationTypeFilters ={
    DEFAULT: "DEFAULT",
    URGENT: "URGENT",
}

const notification = [
    {id: 1, isRead: false, type: "default", value: "New course available"},
    {id: 2, isRead: false, type: "urgent", value: "New resume available"},
    {id: 3, isRead: false, type: "urgent", value: "New data available"},
]

function fetchCourseSuccess(data){
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    }
}
export function markAsRead(index){
    return {
        type: MARK_AS_READ,
        index: 2
    }
}
export function setTypeFilter(filter){
    return {
        type: SET_TYPE_FILTER,
        filter: "URGENT",
    }
}
export default fetchCourseSuccess;
