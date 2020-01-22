import React from 'react';

const validation = (props) => {
    let validationMessage = "Input text is too small!";

    if(props.textLength > 5){
        validationMessage = "Input text is perfect now!";
    }

    return (
        <div style={style}>
            {validationMessage}
        </div>
    )
}

const style = {
    color: "red"
}

export default validation;