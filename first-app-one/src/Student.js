import React from 'react'

let Student = props => {
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <h2>Roll no. : {props.roll}</h2>
        </div>

    );
}

export default Student;