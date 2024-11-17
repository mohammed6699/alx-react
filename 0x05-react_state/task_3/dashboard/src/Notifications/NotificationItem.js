import React, { PureComponent } from "react";
import { StyleSheet,css } from "aphrodite";
import { transform } from "@babel/core";

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
        className={css(menuItems.li, menuItems.hidden && this.props.isNotificationVisible)}
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
const bounceAnimations = {
    "0%": {
        transform: "translocateY(0px)"
    },
    "50%": {
        transform: "translocateY(-5px)"
    },
    "100%": {
        transform: "translocateY(5px)"
    }
};
const opacityAnimation = {
    "0%": {
        opacity: 0.5
    },
    "100%": {
        opacity: 1
    }
};
const menuItems = StyleSheet.create({
    li: {
        width: "100%",
        display: "block",
        fontSize: "20px",
        backgroundColor: "#fff8f8",
        float: "right",
        cursor: "pointer",
        ":hover": {
        animationName: [bounceAnimations, opacityAnimation],
        animationDuration: "0.5s 1s",
        animationIterationCount: "3, 3",
        animationTimingFunction: "ease-in-out"
        }
    },
    hidden: {
        display: "none"
    }
});
// const notificationItems = StyleSheet.create({
//     li: {
//         width: '100%',
//         display: 'block',
//         fontSize: '20px',
//         padding: '10px 8px'
//     }
// })
export default NotificationItem;