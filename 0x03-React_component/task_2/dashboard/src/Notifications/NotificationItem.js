import React, { Component } from "react";
import Notification from './Notifications';

class NotificationItem extends Component({ type: "default", html: null, value: "", markAsRead: () => {}}){
    constructor(props){
        super(props);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handlekeyDown.bind(this));
    }
    handlekeyDown(Event){
        if (Event.key === 'enter'){
            this.props.markAsRead(this.props.id);
        }
    }
    render() {
        const {type, html, value, id} = this.props;
    return (
        <>
        <li
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
export default NotificationItem;