import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    user: state.ui.user,
});
export default connect(mapStateToProps)(Footer)