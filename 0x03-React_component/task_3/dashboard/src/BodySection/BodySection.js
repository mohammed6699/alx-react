import React, {Component} from "react";
import './BodySectionWithMarginBottom.css';

class BodySection extends Component{
    render(){
        return(
                <div className="bodySection">
                    <h2> {this.props.title}</h2>
                    {this.props.children}
                </div>
        );
    }
}
export default BodySection;