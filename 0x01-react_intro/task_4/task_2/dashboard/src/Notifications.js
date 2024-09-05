import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";
import closeIcon from './close-icon.png';


export default function Notification(){
    return (
        <>
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button type="button" aria-label="close" onClick={() =>
                console.log("Close button has been clicked")}
            style={{background: "None",
                    border: "None",
                    position: "absolute",
                    right: "4%",
                    top: "2%",
                    cursor: "pointer",}}>
                    <img src={closeIcon} alt="closeIcon" style={{width: "24px", height: "24px"}} />
            </button>
                <ul>
                    <li data="default">New resume available</li>
                    <li data>New resume available</li>
                    <li data="urgent"
                    dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
        </div>
        </>
    );
}