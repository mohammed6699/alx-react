import * as notificationData from "../../../notifications.json";
import { getAllNotificationsByUser } from "./Notification";

test("get the correct user Id", () => {
    const userId = "IDurtefd1598745"; 
    const dataExpected = notificationData.default
    .filter((Notification) => Notification.author.id === userId)
    .map((Notification) => Notification.context);
    expect(getAllNotificationsByUser(userId)).toEqual(dataExpected);
});
