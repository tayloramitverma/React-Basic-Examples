import React, { Component } from 'react'

// This is the child component of the Student

export default class Marks extends Component {
    constructor(props){
        super(props);
        this.state = {
            mroll : this.props.roll
        }
        console.log("Marks Constructor Initialised!");
    }


    static getDerivedStateFromProps(props, state){

        console.log("Marks get Derived State From Props method Initialised!");
        console.log(props, state);
        if(state.mroll !== props.roll){
            return {mroll:props.roll};
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.mroll < 210){
            console.log("Marks Should Component Update Called!");
            console.log(nextProps, nextState);
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Marks get Snapshot Before Update, It runs before update!");
        console.log(prevProps, prevState);
        return 45;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Marks component Did Update, It runs after update");
        console.log(prevProps, prevState, snapshot);
    }

    render() {
        console.log("Marks render() Initialised!");
        return (
            <div>
                Roll Number is: {this.state.mroll}
            </div>
        )
    }
}
