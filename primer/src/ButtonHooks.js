import React, { useState } from 'react';

export default function ButtonHooks(props) {

    const [hasButtonClicked, setHasButtonClicked] = useState(false);


    const buttonClicked = () => {

        setHasButtonClicked(true);
        props.incrementCallback(5);
        props.callback();

    }

    return (
        <React.Fragment>
            <button
                className={props.className}
                onClick={buttonClicked}
            >
                {props.text} {props.counter}
                {hasButtonClicked && <div>Button Clicked!</div>}
            </button>
        </React.Fragment>
    )

}
