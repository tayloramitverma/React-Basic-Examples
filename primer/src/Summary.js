import React, { Component } from 'react';
//import {CallBackButton} from './CallBackButton';

import SimpleButton from './SimpleButton';
import ButtonHooks from './ButtonHooks';

export default class Summary extends Component {


    render() {

        const props = this.props;
        return <React.Fragment>
            <td>{props.index+1}</td>
            <td>{props.name}</td>
            <td>{props.name.length}</td>
            <td>
                <SimpleButton
                    className={`btn btn-success btn-sm m-1`}
                    text={`Reverse (${props.name})`}
                    callback={props.reverseCallback}
                    {...props}
                />
                <ButtonHooks
                    className={`btn btn-info btn-sm m-1`}
                    text={`Promote (${props.name})`}
                    callback={()=>props.promoteCallback(props.name)}
                    {...props}
                />
            </td>
        </React.Fragment>

    }

}

