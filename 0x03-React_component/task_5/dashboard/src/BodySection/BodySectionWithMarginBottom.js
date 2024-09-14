import React, { Component } from "react";
import bodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component{
    render(){
        return(
                <div className="bodySectionWithMargin">
                    <bodySection />
                </div>
        );
    }
}
export default BodySectionWithMarginBottom;