import React from "react";
import './Notifications.css';
import { getLatestNotification } from "../utils";
import closeIcon from '../close-icon.png';
import NotificationItem from "./NotificationItem";

export default function Notification({ displayDrawer }){
    return (
        <>
        <div className="menuItem">
            <p>Your notifications</p>
        </div>
            {displayDrawer && (
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available"/>
                        <NotificationItem type="urgent" value="New resume available"/>
                        <NotificationItem 
                        type="urgent" 
                        html={{ __html: getLatestNotification() }}
                        />
                    </ul>

                    <button 
                    type="button" 
                    aria-label="close" 
                    onClick={() => console.log("Close button has been clicked")}
                    style={{
                        display: "inline-block",
                        background: "None",
                        border: "None",
                        position: "absolute",
                        top: "56px",
                        right: "16px",
                        cursor: "pointer",
                        zIndex: '1',
                        }}>
                        <img src={closeIcon} alt="closeIcon" style={{width: "24px", height: "24px"}} />
                </button>
        </div>
        )}
        </>
    );
};

Notification.defaultProps = {
    displayDrawer: false,
};
