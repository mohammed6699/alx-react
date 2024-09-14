import React, { PureComponent } from "react";
import './Notifications.css';
import { getLatestNotification } from "../utils";
import closeIcon from '../close-icon.png';
import NotificationItem from "./NotificationItem";

class Notification extends PureComponent{
    static defaultProps = {
        markAsRead: () => {},
        listNotifications: [],
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
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }
    render(){
    return (
        <>
        <div className="menuItem">
            <p>Your notifications</p>
        </div>
            {(
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications.length === 0 ? (
                            <li>No Notifications For Now</li>
                        ):(
                            listNotifications.map((Notification) => (
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