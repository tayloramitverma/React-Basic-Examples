import React, { Component } from 'react';
import ActionButton from './ActionButton';

export default class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            names: ["Bob", "Alice", "Dora"]
        }
    }

    reverseList = () => {
        this.setState({name:this.state.names.reverse()});
    }

    render() {
        return (
            <div>
                <ActionButton
                    callback={this.reverseList}
                    text="Reverse Names"
                />

                {
                    this.state.names.map(name => {
                        return <h5 id={ name.toLowerCase() } key={name}>{name}</h5>
                    })
                }

            </div>
        )
    }
}
