import React from 'react';

function User(props) {
    return(
        
        <React.Fragment>
            <h1>Welcome User!</h1>
            <button onClick={props.callBack}>Logout</button>
        </React.Fragment>
    )
}

export default User;