import {login, logout, displayNotificationDrawer, hideNotificationDrawer} from "./uiActions";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { uiBondCreators } from "./uiBondCreators";
import { store } from "./store";

test("write a test for the Login action", () => {
    const email = "someone@example.com";
    const password = "password!@#{][123";
    const expectedAction = {
        type: LOGIN,
        user: { email, password }
    }
    expect(login(email, password)).toEqual(expectedAction);
});
test("write a test for Logout Action", () =>{
    const expectedAction = {
        type: LOGOUT
    }
    expect(logout()).toEqual(expectedAction);
});
test("write at test for displayNotificationDrawer Action", () => {
    const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
});
test("write a test for hideNotificationDrawer Action", () => {
    const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
    };
    expect (hideNotificationDrawer).toEqual(expectedAction)
});
test("test suite for the loginRequest action", () => {
    store.dispatch(uiBondCreators('user@example.com', "oooo!@#5698"));
})