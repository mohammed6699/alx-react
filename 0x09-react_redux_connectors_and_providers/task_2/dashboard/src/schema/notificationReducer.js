const FETCH_COURSE_SUCCESS = "FETCH_COURSE_SUCCESS";
const SELECT_COURSE = "SELECT_COURSE";
const UNSELECT_COURSE = "UNSELECT_COURSE";

const initState = Map();

export const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizeData = courseNormalizar(action.data);
            return state.merge(formJs(normalizeData));
    
    case SELECT_COURSE:
        return state.setIn([string(action.CourseId), 'isSelected'], true);

    
    case UNSELECT_COURSE:
        return state.setIn([string(action.CourseId), 'isSelected'], false);

    default:
        return state
    }
}