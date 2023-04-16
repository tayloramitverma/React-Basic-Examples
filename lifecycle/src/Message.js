import React, { Component } from 'react';
import ActionButton from './ActionButton';

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSpan: false
        }
    }

    handleClick = (event) => {
        this.setState({ showSpan: !this.state.showSpan });
        this.props.callback(event);
    }

    getMessageElement() {
        let div = <div id="messageDiv" className="h5 text-center p-2">
                        { this.props.message }
                  </div>
        return this.state.showSpan ? <span>{ div } </span> : div;
    }
    
    render() {
        console.log(`Render Message Component`);
        return (
            <div>
                <ActionButton
                    theme="primary" { ...this.props }
                    callback={ this.handleClick }
                />
                { this.getMessageElement() }
            </div>
        )
    }

    componentDidMount() {
        console.log("componentDidMount Message Component");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate Message Component");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount Message Component");
    }

    shouldComponentUpdate(newProps, newState) {
        let change = newProps.message !== this.props.message;
        if (change) {
            console.log(`shouldComponentUpdate ${this.props.text}: Update Allowed`)
        } else {
            console.log(`shouldComponentUpdate ${this.props.text}: Update Prevented`)
        }
        return change;
    }
}
