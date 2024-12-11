import React, { useState } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../Footer/Footer';
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
export const loginRequest = (email, password) => {
  return {
    type: 'Login_Request',
    user: {email, password},
  };
}
const APP = ({isLoggedIn, displayDrawer, loginRequest}) => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const handleLogin = () => {
    loginRequest(email, password)
  }
}
export default mapStateToProps;