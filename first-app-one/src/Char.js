import React from 'react';

const charList = (props) => {

    return (
        <div style={style} onClick={props.callback}>
            {props.charIs}
        </div>
    )

}

const style= {
    width:'20px',
    pagdding: '10px',
    margin: '10px',
    border: '1px solid',
    textAlign: 'center' ,
    diplay: "inline-block",
    float: 'left'
}


export default charList;