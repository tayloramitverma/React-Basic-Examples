import React from 'react';

function Guest(props) {

    
    return (
        <React.Fragment>
            <h1>Welcome Guest!</h1>
            <button onClick={props.callBack}>Signup</button>
            <button onClick={props.callBack}>SignIn</button>
        </React.Fragment>
    )
}

export default Guest;