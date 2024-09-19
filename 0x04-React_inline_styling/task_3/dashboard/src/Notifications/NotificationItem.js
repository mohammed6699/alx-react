import React, { PureComponent } from "react";
import { StyleSheet,css } from "aphrodite";

class NotificationItem extends PureComponent({ type: "default", html: null, value: "", markAsRead: () => {}}){
    
    componentDidMount() {
        document.addEventListener('keydown', this.handlekeyDown.bind(this));
    }
    handlekeyDown(Event){
        if (Event.key === 'enter'){
            this.props.markAsRead(this.props.id);
        }
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handlekeyDown.bind(this));
    }
    render() {
        const {type, html, value, id} = this.props;
    return (
        <>
        <li
        className={css(notificationItems.li)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html } : null}
        onClick={() => this.props.markAsRead(id)}
        >
            {!html ? value : null}            
        </li>
        </>
    );
}
}
const notificationItems = StyleSheet.create({
    li: {
        width: '100%',
        display: 'block',
        fontSize: '20px',
        padding: '10px 8px'
    }
})
export default NotificationItem;