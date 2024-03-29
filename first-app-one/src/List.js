import React from 'react'

function listItems(props){

    const items = props.numbers;

    const listdisplay = items.map((item, index) =>
        <li key={index}>{props.prefixname+' - '+item}</li>
    );

    return <ul>{listdisplay}</ul>;

}



export default listItems;