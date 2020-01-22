import React, { Component } from 'react';
import Message from './Message';
import List from './List';
import ExternalCounter from './ExternalCounter';
import {HooksMessage} from './HooksMessage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      showMessage: true
    }
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter +1
    });
  }

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage });
  }

  render() {
    return (
        <div className="container text-center">
            <div className="row p-2">
              <div className="col-4">
                
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={ this.state.showMessage }
                    onChange={ this.handleChange }
                  />
                    <label className="form-check-label">Show</label>
                </div>
                        { this.state.showMessage &&
                          
                          <div>
                            <Message message={ `Counter: ${this.state.counter}`}
                                callback={ this.increaseCounter }
                                text="Increment Counter" />
                            <HooksMessage message={ `Counter: ${this.state.counter}`}
                                callback={ this.increaseCounter }
                                text="Increment Counter" />
                          </div>
                        }
            
              </div>
              <div className="col-4">
                <List />
              </div>
              <div className="col-4">
                <ExternalCounter />
              </div>
            </div>
        </div>
    )
}
}
