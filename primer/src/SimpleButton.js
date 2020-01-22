import React, { Component } from 'react'

export default class SimpleButton extends Component {

    constructor(props){
        super(props);
        this.state ={
            hasButtonClicked : false
        }
    }

    buttonClicked = () => {
        
        this.setState({
            hasButtonClicked: true
        });

        this.props.incrementCallback(5);

        this.props.callback();
    }

    render() {
        return (
                <React.Fragment>
                    <button
                        className={this.props.className}
                        onClick={this.buttonClicked}
                    >
                        {this.props.text} {this.props.counter}
                        {this.state.hasButtonClicked && <div>Button Clicked!</div>}
                    </button>
                </React.Fragment>
        )
    }
}