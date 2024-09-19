import React, { Component } from "react";
import { getLatestNotification } from "../utils";
import closeIcon from '../close-icon.png';
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";

class Notification extends Component{
    static defaultProps = {
        markAsRead: () => {},
        list_Notifications: [],
    };
    constructor(props) {
        super(props);
        this.state = {show: true};
    }
    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`)
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handlekeyDown.bind(this));
        this.props.markAsRead(123);
    }
    handlekeyDown(Event){
        if (Event.key === 'Escape'){
            this.setState({show: this.state.show});
        }
    }
    shouldComponentUpdate(nextProps){
        return nextProps.list_Notifications.length !== this.props.list_Notifications.length;
    }
    render(){
    return (
        <>
        <div className={css(notification.menuItems)}>
            <p>Your notifications</p>
        </div>
            {(
            <div className={css(notification.Notifications)}>
                <p>Here is the list of notifications</p>
                    <ul className={css(notification.ul)}>
                        {Notification.length === 0 ? (
                            <li className={css(notification.li)}>No Notifications For Now</li>
                        ):(
                            Notification.map((Notification) => (
                                <NotificationItem
                                key={Notification.id}
                                type={Notification.type}
                                value={Notification.value}
                                html={Notification.html}
                                markAsRead={() => this.markAsRead(Notification.id)}
                                />
                            ))
                        )}
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
}
export default Notification;

const notification = StyleSheet.create({
    menuItems: {
        display: 'flex',
        paddingLeft: '1200px'
    },
    Notifications: {
        border: '3px dashed #e0344a',
        position: 'relative',
        padding: '6px 12px',
        fontSize: '20px'
    },
    ul, ['data-notification-type="default"']: {
        color: 'blue'
    },
    li, ['data-notification-type="default"']: {
        color: 'blue'
    },
    ul, ['data-notification-type="urgent"']: {
        color: 'red'
    },
    li, ['data-notification-type="urgent"']: {
        color: 'red'
    }
})
