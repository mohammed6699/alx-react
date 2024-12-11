import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markasread, setNotificationFilter } from "./notificationActionCreators";

test("write a test for the markAsAread action", () => {
    const action = markasread(1);
    const expectedAction = {
        type: MARK_AS_READ,
        index: 1
    }
    expect(action).toEqual(expectedAction);
});
test("est for the setNotificationFilter action", () => {
    const action = setNotificationFilter(NotificationTypeFilters.ALL);
    const expectedAction = {
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.DEFAULT,
    }
    expect(action).toEqual(expectedAction);
});