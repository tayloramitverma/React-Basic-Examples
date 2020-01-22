import React from 'react'
import {SimpleButton} from './SimpleButton';


export function CallBackButton(props) {

        let {theme, ...childProps} = props;
        return (
            <React.Fragment>
                <SimpleButton className={`btn btn-${props.theme} btn-sm m-1`} {...childProps} />
            </React.Fragment>
        )
}

CallBackButton.defaultProps = {
    text : "Default Button Text",
    theme : "warning"
}