import * as notificationData from "../../../notifications.json"

function getAllNotificationsByUser(userId){
    return notificationData.default.filter(notification => notification.userId === userId).map((notification) => notification.context)
}
const user = new schema.Enity("user");
const message = new schema.Enity("message",
    {},
    {idAttribute: "guid"}
    );
    const notification = new schema.Enity("notification", {
        author: user,
        context: message,}
    );
    export {user, message, notification};