import React, { Component } from 'react'
import Marks from './Marks'

// This is the child component of the App

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state={
            name: this.props.name,
            roll: this.props.roll
        }

        console.log("Student Constructor Initialised!");
    }

    handleClick = () =>{
        console.log("Student Button Clicked!")
        this.setState({roll:this.state.roll + 2});
    }

    componentDidMount(){
        console.log("Student componentDidMount Initialised!");
    }

    render() {
        console.log("Student render() Initialised!");
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Roll: {this.state.roll}</p>
                <Marks roll={this.state.roll}/>
                <button onClick={this.handleClick} >Update Roll</button>
            </div>
        )
    }
}
