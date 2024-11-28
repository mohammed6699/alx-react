import * as notificationData from "../../../notifications.json"

function getAllNotificationsByUser(userId){
    return notificationData.default.filter(notification => notification.userId === userId).map((notification) => notification.context)
}