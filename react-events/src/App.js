import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ThemeButton from './ThemeButton';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        message: "Ready!",
        counter: 0,
        theme: 'secondary'
    }
  }

  handleClick = (event, newTheme) => {
    event.persist();
    this.setState(
        {
          counter: this.state.counter+1,
          theme : event.target.innerText === "Normal" ? "primary" : "danger"
        },
        () => this.setState({message: `${event.type} : ${this.state.counter}  `})
    );
  }

  toggleCheckBox = (event) => {
    if(this.state.counter === 1){
      event.preventDefault();
    }
  }

  selectTheme = (newTheme) => {
    this.setState({
      theme: newTheme,
      message: `Theme is ${newTheme}`
    });
  }

  handleClick= (event) => {
    console.log(`App: Type: ${event.type} `
        + `Target: ${event.target.tagName} `
        + `CurrentTarget: ${event.currentTarget.tagName}`);
  }

  render() {
    return (
      <div className="m-2" onClick={this.handleClick}>
        <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={ this.toggleCheckBox }
            />
            <label>This is a checkbox</label>
        </div>
        <div className={`h4 bg-${this.state.theme} text-center text-white p-2`}>
            {this.state.message}
        </div>
        <div className="text-center" onClick={this.handleClick}>
            <button className="btn btn-primary" onClick={(e)=>this.handleClick(e, 'primary')} >Normal</button>
            <button className="btn btn-danger m-1" onClick={(e)=>this.handleClick(e, 'danger')} >Danger</button>
            <ThemeButton theme="primary" callback={this.selectTheme} />
            <ThemeButton theme="danger" callback={this.selectTheme} />
        </div>
        
      </div>
    )
  }
  
}