import React, { Component } from "react";
const WrappedComponentName = 'Component';


class WithLogging extends Component{
    constructor(props){
        super(props);
        this.displayName = `withLogging ${NAME_OF_THE_WRAPPED_COMPONENT}`
    }
    componentDidMount(){
        console.log(`${this.WrappedComponentName}is Mounted`)
    }
    componentWillUnmount(){
        console.log(`${this.WrappedComponentName}is going to unmount`)
    }
    render(){
        return(
            <>
                <WithLogging>
                    {this.props.children};
                </WithLogging>
            </>
        );
    }

}
export default WithLogging;