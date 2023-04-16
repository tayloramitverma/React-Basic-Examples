import React, { Component } from 'react'

export default class ActionButton extends Component {
    render() {
        console.log(`Render ActionButton (${this.props.text}) component.`)
        return (
          <button
            className="btn btn-primary m-2"
            onClick={this.props.callback}
          >
            {this.props.text}
          </button>
        )
      }
}
