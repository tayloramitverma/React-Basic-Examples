import React from 'react';


function createInnerElements(names) {
    let arrElement = [];
    for(let i=0; i < names.length; i++){
        arrElement.push(
            <div key={i}>
                {`${names[i]} contains ${names[i].length} letters`}
            </div>
        );
    }

    return arrElement
}

export function Message(props) {
    let classes;
    switch (props.name) {
        case "Amit":
            classes = "bg-warning text-left text-white p-2";
            break;
        case "Verma":
            classes = "bg-success text-center text-white p-2";
            break;
        default:
            classes = "bg-info text-center text-white p-2"
    }


    return <h4 className={ classes }> 
        {props.greeting}, {props.name} <br/>Using for loop: {createInnerElements(props.names)} 
        <br/>Using map:<br/>
        {props.names.map( name => (
            <div key={name}>{`${name} contains ${name.length} letters`} </div>
        )   
        )}
    </h4>
    
}