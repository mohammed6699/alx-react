import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.ui.isLoggedIn, // Access isLoggedIn from uiReducer
    };
  };
export default mapStateToProps;