import React from 'react';
import {CallBackButton} from './CallBackButton';

export function Summary(props) {

    return <React.Fragment>
            <td>{props.index+1}</td>
            <td>{props.name}</td>
            <td>{props.name.length}</td>
            <td>
                <CallBackButton theme={'success'} text={'Reverse'} callback={props.reverseCallback} />
                <CallBackButton theme={'info'} text={'Promote'} callback={()=>props.promoteCallback(props.name)} />
                <CallBackButton callback={props.reverseCallback} />
            </td>
    </React.Fragment>
}