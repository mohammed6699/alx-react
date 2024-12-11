import {Map} from 'immutable';
import {rootReducer} from "./rootReducer";

describe("rootReducer", () => {
    it("courses return the initial state", () => {
        const state = Map();
        const action = {};
        const nextState = rootReducer(state, action);
        expect(nextState).toEqual(state);
    });
    it("notifications should return the initial state", () => {
        const state = Map();
        const action = {};
        const nextState = rootReducer(state, action);
        expect (nextState).toEqual(state);
    });
    it("ui should return the initial state", () => {
        const state = Map();
        const action = {};
        const nextState = rootReducer(state, action);
        expect(nextState).toEqual(state);
    });
})