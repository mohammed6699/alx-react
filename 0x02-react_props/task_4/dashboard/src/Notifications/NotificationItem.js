import React from "react";

const NotificationItem =({ type = "default", html = null, value = ""}) => {
    return (
        <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html } : null}
        >
            {!html ? value : null}
        </li>
    );
}
export default NotificationItem;