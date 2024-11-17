import React, { Component } from "react";
// import bodySection from './BodySection';
 import { StyleSheet, css } from "aphrodite";

class BodySectionWithMarginBottom extends Component{
    render(){
        return(
                <div className={css(bodysectionStyle.bodySection)}>
                    <bodySection />
                </div>
        );
    }
}
const bodysectionStyle = ({
    bodySection: {
        marginBottom: '40px',
    }
})
export default BodySectionWithMarginBottom;