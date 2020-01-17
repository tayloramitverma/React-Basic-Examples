import React, { Component } from 'react'

export default class ThemeButtons extends Component {
    render() {
        return (
            <span>
                <button className={`btn btn-${this.props.theme}`} onClick={(e)=>this.handleClick(e, 'normal')} >Normal</button>
            </span>
        )
    }
}
