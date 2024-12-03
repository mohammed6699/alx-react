const SELECT_COURSE = "SELECT_COURSE";
const UNSELECT_COURSE = "UNSELECT_COURSE";
const FETCH_COURSE_SUCCESS = "FETCH_COURSE_SUCCESS";


const courses = [
    {id: 1, name: "ES6", isSelected: false, credit: 60},
    {id: 2, name: "Webpack", isSelected: false, credit: 20},
    {id: 3, name: "React", isSelected: false, credit: 40},
]
function fetchCourseSucess(data){
    return {
        type: FETCH_COURSE_SUCCESS,
        data,
    };
}
export function selectCourse(index){
    return {
    type: SELECT_COURSE,
    index,
    };
}

export {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS};
export default fetchCourseSucess;