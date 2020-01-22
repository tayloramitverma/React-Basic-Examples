import React, {Fragment} from 'react'
import List from './List'

import Student from './Student'

import './App.css';

const firstFunc = ()=>{

    const numbers = [1,2,3,4,5,6];
    return (
        <Fragment>
            <h1 className="bg">Hello Amit</h1>
            <h2>This is testing</h2>
            <ul><List numbers={numbers} prefixname="Taylor"/></ul>
            <Student name="Rahul" roll="420" />
        </Fragment>

    );
}



export default firstFunc;