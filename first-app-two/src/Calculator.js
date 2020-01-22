import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return (<p>The water would boil.</p>);
    }else{
        return <p>The water would not boil.</p>;
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
} 

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {scale: 'c', temperature: '', title: ''};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    componentDidMount(){

        this.setState({title: 'Loading....'});

        if(this.props.title === '200'){
            
            setInterval(() => {
                this.setState({title: 'Lifting State Up'});
            }, 2000);

        }
        
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }


    
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
        const titleIs = this.state.title;

        return (
          <div>
            <h1>{titleIs}</h1>
            <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange} />
    
            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange} />
    
            <BoilingVerdict
              celsius={parseFloat(celsius)} />
    
          </div>
        );
    }

}

export default Calculator;