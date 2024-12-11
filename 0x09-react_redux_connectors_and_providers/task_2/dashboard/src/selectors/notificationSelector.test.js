import {filterTypeSelected, getNotifications, getUnreadNotifications} from './notificationSelector';

describe("Notification Selector", () => {
    const mockState = {
        notifications: [
            {id: 1, type: 'INFO', read: false},
            {id: 2, type: 'INFO', read: false},
            {id: 3, type: 'INFO', read: false},
        ]
    };
    test("filtertypeslected work as expected", () => {
        const result = filterTypeSelected(mockState);
        expect(result).tobe("Default");
    });
    test("getNotifications returns a list of the message entities within the reducer", () => {
        const notification = getNotifications(mockState);
        expect(notification).toEqual(mockState.notifications.notification);
    });
    test("getUnreadNotifications return a list of the message entities within the reducer", () => {
        const unreadNotification = getUnreadNotifications(mockState);
        expect(unreadNotification).toEqual([
            {id: 1, message: "Notification", isRead: false},
            {id: 2, message: "Notification", isRead: false},
        ]);
    })
})