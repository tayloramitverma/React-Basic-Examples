import React, { Component } from 'react'

class TodoCreator extends Component {

    constructor(props){
        super(props);
        this.state={newItemText:''};
    }

    changeinputValue =(event)=>{
        this.setState({
          newItemText: event.target.value
        })
    }
    
    createNewItem =()=>{
        this.props.callBack(this.state.newItemText);
        this.setState({
          newItemText: ''
        });
    }

    render =()=>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.changeinputValue} />
            <button className="btn btn-primary m-1" onClick={this.createNewItem}>Add</button>
        </div>
}

export default TodoCreator;