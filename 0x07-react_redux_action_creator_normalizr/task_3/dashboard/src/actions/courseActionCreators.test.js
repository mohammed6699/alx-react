import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";
test("write a test for the selectCourse action", () => {
    const course = { id: 1, name: "Math" };
    const expectedAction = { type: SELECT_COURSE, index: 1 };
    const action = selectCourse(course);
    expect(action).toEqual(expectedAction);
});

test(" test for the unSelectCourse action", () => {
    const course = { id: 1, name: "Math" };
    const unexpectedAction = { type: UNSELECT_COURSE, index: 1 };
    const action = unSelectCourse(course);
    expect(action).toEqual(unexpectedAction);
});