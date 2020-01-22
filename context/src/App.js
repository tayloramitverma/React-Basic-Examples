import React, {Component} from 'react';
import ThemeBackground from './ThemeBackground';
import {Provider} from './MyContext';

export default class App extends Component {

  state = {
    counter :  0,
    name : "Amit"
  }

  clickHandlerContext = () => {
    console.log("Clicked on Button");
    this.setState({counter:this.state.counter+1});
  }

  render() {
    const contextValue = {
      data: this.state,
      callback: this.clickHandlerContext
    }
    return (
      <div>
        <h1>Counter is: {this.state.counter}</h1>
        <Provider value={contextValue} >
          <ThemeBackground/>
        </Provider>
      </div>
    )
  }
}
