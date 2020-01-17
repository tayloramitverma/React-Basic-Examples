import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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

  render() {
    return (
      <div className="m-2">
        <div className={`h4 bg-${this.state.theme} text-center text-white p-2`}>
            {this.state.message}
        </div>
        <div className="text-center">
            <button className="btn btn-primary" onClick={(e)=>this.handleClick(e, 'normal')} >Normal</button>
            <button className="btn btn-danger m-1" onClick={(e)=>this.handleClick(e, 'danger')} >Danger</button>
        </div>
      </div>
    )
  }
  
}