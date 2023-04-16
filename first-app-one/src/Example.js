import React, { Component } from 'react'
import Validation from './Validation';
import Char from './Char'
export default class Example extends Component {
    state = {
        inputText : '',
        persons: 
            [
                {name:"AMit", roll: "11"},
                {name:"kumar", roll: "12"},
                {name:"taylor", roll: "13"}
            ]
        
    }

    changeHandler = (e) => {
        this.setState({inputText:e.target.value});
    }

    deleteCharHandler = (index) => {
        console.log(index);

        const text = this.state.inputText.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({
            inputText: updatedText
        })

        console.log(text);
    }
    
    render() {

        const char = this.state.inputText.split('').map((ch, index) => {
            return (
                <Char
                    key={index}
                    charIs={ch}
                    callback={()=>this.deleteCharHandler(index)}                
                />
            )
        })


        return (
            <div>
                <p>{this.state.inputText}</p>
                <input type="text" value={this.state.inputText} onChange={this.changeHandler} />
                <Validation textLength={this.state.inputText.length} />
                {char}
            </div>
        )
    }
}
