import React from 'react';

export function SimpleButton(props) {
    return (
        <React.Fragment>
            <button className={props.className} onClick={props.callback} >{props.text}</button>
        </React.Fragment>
    )

}