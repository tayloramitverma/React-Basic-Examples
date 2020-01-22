import React, { Component } from 'react'

import { Receiver } from './MyContext'

export default class ThemeBackground extends Component {
    render() {
        return (
            <div className="container ">
                <Receiver>
                    {({data, callback}) => (
                        <div>
                            <h2>{data.name} {data.counter}</h2>
                            <button onClick={callback}>Increase Count!</button>
                        </div>
                    )}
                </Receiver>
            </div>
        )
    }
}
