import React, { Component } from 'react'

import Calculator from './Calculator'
import StateExample from './StateExample'
import SignUpDialog from './SignUpDialog'
import FetchData from './FetchData'

class NameForm extends Component {

    constructor(props){
        super(props);
        this.state = {value: '', newvalue: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        console.log(this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    getInputValue(event){
        this.setState({newvalue: this.state.value});
        event.preventDefault();
    }


    render(){

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit" >Submit</button>

                    <div>{this.state.value}</div>
                    <br/>
                    <button onClick={this.getInputValue}>Get Input Value</button>
                    <p>{this.state.newvalue}</p>
                </form>

                <Calculator title="200"/>

                <StateExample />

                <SignUpDialog />

                <FetchData />
            </div>
            
        );

    }
}

export default NameForm;

