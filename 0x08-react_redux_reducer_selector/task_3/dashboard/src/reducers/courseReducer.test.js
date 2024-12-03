import uiReducer from "./uiReducer";
import { FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe("uiReducer", () => {
    it("should retrun empty array", () => {
        const state = uiReducer(undefined, {});
        expect(state.get("user")).toEqual(Map());
    });
    it("fetch course return passed data", () =>{
        const state = uiReducer(undefined, {});
        const action = {type: FETCH_COURSE_SUCCESS};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1,
            type: "default",
            isSelected: false,
            value: "New course available"
            }));
    })
    it("markAsReed retruns data correctly", () => {
        const state = uiReducer(undefined, {});
        const action = {type: MARK_AS_READ};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1, 
            isRead: false, 
            type: "default", 
            value: "New course available"
        },
        {   id: 2, 
            isRead: false, 
            type: "urgent", 
            value: "New resume available"
        },
        {
            id: 3, 
            isRead: false, 
            type: "urgent", 
            value: "New data available"}
    ))
    });
    it("setTypeFilter retruns data corretly when passed", () => {
        const state = uiReducer(undefined, {});
        const action = {type: SET_TYPE_FILTER};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1, 
            isRead: false, 
            type: "default", 
            value: "New course available"
        },
        {   id: 2, 
            isRead: false, 
            type: "urgent", 
            value: "New resume available"
        },
        {
            id: 3, 
            isRead: false, 
            type: "urgent", 
            value: "New data available"}
    ))
    })
})
