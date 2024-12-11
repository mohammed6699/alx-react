import uiReducer from "./uiReducer";
import {DISPLAY_NOTIFICATION_DRAWER} from "../actions/uiActionTypes";
import {Map} from "immutable";

describe ("uiReducer", () => {
    it("should return an intial state when the action is passed", () => {
        const state = uiReducer(undefined, {});
        expect(state.tojs()).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {},
        });
    });
    it("should return intial state when the SELECT_ACTIOn is passed", () => {
        const action = {type: SELECT_ACTION};
        const state = uiReducer(undefined, action);
        expect(state.tojs()).toEqual({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
    });
    it("when the function DISPLAY_NOTIFICATION_DRAWER passed the isNotificationDrawerVisible set to true", () => {
        const action = {type: DISPLAY_NOTIFICATION_DRAWER};
        const state = uiReducer(undefined, action);
        expect(state.get("isNotificationDrawerVisible")).toEqual(true);
    });
})
describe ("uiReducer", () => {
    it("default state return empty array", () => {
        const state = uiReducer(undefined, {});
        expect(state.get("user")).toEqual(Map());
    });
    it("fetch course return passed data", () =>{
        const state = uiReducer(undefined, {});
        const action = {type: FETCH_COURSE_SUCCESS};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1,
            name: "ES6",
            isSelected: false
            }));
    })
    it("select course return data correctly when passed", () =>{
        const state = uiReducer(undefined, {});
        const action = {type: SELECT_COURSE};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
            },
    ))
    });
    it("unselect course returns the data correctly when passed", () => {
        const state = uiReducer(undefined, {});
        const action = {type: UNSELECT_COURSE};
        const newState = uiReducer(state, action);
        expect(newState.get("user")).toEqual(Map({
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60
        },
        {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20
        },
        {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40
            },
    ))
    });
})