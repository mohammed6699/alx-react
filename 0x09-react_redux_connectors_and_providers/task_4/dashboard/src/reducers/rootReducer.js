import {uiReducer} from "./uiReducer";
import { courseReducer } from "./courseReducer";
import {notificationReducer} from "./notificationReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
});
export default rootReducer;