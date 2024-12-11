import React from 'react';
import { connect } from 'react-redux';
import {displayNotificationDrawer, hideNotificationDrawer} from "../actions/uiActionCreators"
const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.ui.isLoggedIn, // Access isLoggedIn from uiReducer
      displayDrawer: state.ui.isNotificationDrawerVisible
    };
  };
export const displayNotificationDrawer = () => ({
  type: 'DISPLAY_NOTIFICATION_DRAWER'
})
export const hideNotificationDrawer = () => ({
  type: 'HIDE_NOTIFICATION_DRAWER'
})
export default mapStateToProps;