import React, { Component } from 'react'

class TodoBanner extends Component{

    constructor(props){
        super(props);
        this.state = {newName: this.props.name};
    }

    changeStateData =()=>{
        this.setState({
            newName: this.state.newName === "Amit Taylor" ? "Amit Verma" : "Amit Taylor"
        })
    }

    render(){
        return (
            <React.Fragment>
                <h4 className="bg-primary text-white text-center p-2">
                { this.state.newName ? this.state.newName +"'s" : "" } To Do List 
                ({this.props.tasks.filter(t => !t.done).length } item to do)

                <button className="btn btn-primary m-2" onClick={this.changeStateData}>Update User Name</button>
                </h4>
            </React.Fragment>
        )
    }

}

export default TodoBanner;