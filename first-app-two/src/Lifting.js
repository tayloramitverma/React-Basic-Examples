import React, { Component, Fragment } from 'react'


function BoilingVerdict(props){
    if(props.celsius >= 100){
        return (<p>The water would boil.</p>);
    }else{
        return <p>The water would not boil.</p>;
    }
}

const scaleName = {
    c : 'Celsius',
    f : 'Fahrenheit'
}

class Lifting extends Component{

    constructor(props){
        super(props);
        this.state = {temp: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({temp: e.target.value});
    }


    render(){
        const scale = this.props.scale;
        return (
            <Fragment>
                <legend>Enter temperature in {scaleName[scale]}:</legend>
                <input value={this.state.temp} onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(this.state.temp)} />
            </Fragment>
        );
    }

}

export default Lifting;