import React, { PureComponent } from "react";


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