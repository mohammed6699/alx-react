import { bindActionCreators } from "redux";

const SELECT_COURSE = "SELECT_COURSE";
const UNSELECT_COURSE = "UNSELECT_COURSE";
export {SELECT_COURSE, UNSELECT_COURSE};

export function selectCourse(courseId){
    return {
        type: SELECT_COURSE,
        payload: courseId
    };
}
export function unselectCourse(courseId){
    return {
        type: UNSELECT_COURSE,
        payload: courseId
        };
}
function bindCourse(dispatch){
    return bindActionCreators
    ({
       selectCourse,
       unselectCoursem
    }),
    dispatch;
}