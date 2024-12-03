import * as notificationData from "../../../notifications.json"
import {normalize} from "normalizr";


const normilizedData = normalize(notificationData, [notification]);
function getAllNotificationsByUser(userId){
    const {notification, message} = normilizedData.entities;
    const result = [];
    for (const notificationId in notification){
        const notification = notification[notificationId];
        if (notification.userId === userId){
            result.push(notification);
    }        
}
    return result;
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
export default getAllNotificationsByUser;