import React from 'react'

class StateExample extends React.Component {

    constructor(props){
        super(props);
        this.state = {count:0};

        //this.updateCount = this.updateCount.bind(this);
    }

    updateCount(e){
        this.setState((previousState, props)=>{
            return { count: previousState.count+1 };
        });
    }

    render(){
        return(
                <button onClick={() => this.updateCount()}>
                    Clicked {this.state.count} times
                </button>
            );
    }



}

export default StateExample;