import * as notificationData from "../../../notifications.json";
import { getAllNotificationsByUser } from "./Notification";
import {normalize} from "normalizr";
import { notification, user } from "./notifications";
import {notificationData} from "../../../notifications.json";
test("get the correct user Id", () => {
    const userId = "IDurtefd1598745"; 
    const dataExpected = notificationData.default
    .filter((Notification) => Notification.author.id === userId)
    .map((Notification) => Notification.context);
    expect(getAllNotificationsByUser(userId)).toEqual(dataExpected);
});

test("normalize data has correct result", () => {
    expect(normalize.result).toEqual([
        "5debd76480edafc8af244228",
        "5debd764507712e7a1307303",
        "5debd76444dd4dafea89d53b",
        "5debd76485ee4dfd1284f97b",
        "5debd7644e561e022d66e61a",
        "5debd7644aaed86c97bf9d5e",
        "5debd76413f0d5e5429c28a0",
        "5debd7642e815cd350407777",
        "5debd764c1127bc5a490a4d0",
        "5debd7646ef31e0861ec1cab",
        "5debd764a4f11eabef05a81d",
        "5debd764af0fdd1fc815ad9b",
        "5debd76468cb5b277fd125f4",
        "5debd764de9fa684468cdc0b"])
    });

test("narmalized data has correct result", () => {
    const userId = "5debd764a7c57c7839d722e9";
    expect(normalizedData.entities.users[userId]).toEqual({
        age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"})
    });

test("normalized data has a correct messages entity", () => {
    const messageId = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";
    expect(normalizedData.entities.messages[messageId]).toEqual({
        guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
        isRead: false,
        type: "default",
        value: "Cursus risus at ultrices mi."})
    });
test(" normalized data has a correct notifications entity", () => {
    const notificationId = "5debd7642e815cd350407777";
    expect(normalizedData.entities.notification[notificationId]).toEqual({
        author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    })
});
