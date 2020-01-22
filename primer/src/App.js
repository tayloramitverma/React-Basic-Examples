import React, { useState } from 'react';
import './App.css';
import { sumValues, divideValues, subtractValues as deduct, multiplyValues } from  './example';

//Importing entire module
import * as obj from './example'

import {asyncAdd} from './async'

import 'bootstrap/dist/css/bootstrap.css';

import { Message } from "./Message";
import Summary from "./Summary";

import ReactDOM from 'react-dom';

let list = ["Bob", "Tom", "Harry"];

function reverseList(){
  list.reverse();
  ReactDOM.render(<App />, document.getElementById('root'));
}

function promoteList(name){
  list = [name, ...list.filter(val => val !== name )];
  ReactDOM.render(<App />, document.getElementById('root'));
}

function App() {

  const values = [1,2,5,6,7];
  
  const sumIs = sumValues(values);
  console.log('Sum:' + sumIs);

  const sumIs1 = obj.sumValues(values);
  console.log('Sum:' + sumIs1);

  const divideIs = divideValues(200, 100);
  console.log('Divide:' + divideIs);

  const multiplyIs = multiplyValues(values);
  console.log('Multiply:' + multiplyIs);

  const subtractIs = deduct(200, values);
  console.log('Subtract:' + subtractIs);

  //Understanding Async and await

  asyncAdd(values).then(totalval=>console.log('Main Total: ' + totalval));

  async function doTask(values){
    let atotal = await asyncAdd(values);
    console.log(atotal);
  }

  doTask(values);

  const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => setCounter( counter + increment ); 


  return (
    <div className="App">
      <Message name="Amit" greeting="Hello" names={['Ram', 'Shayam', 'Karishna']}/>
      <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Letters</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { list.map( (name, index) => 
                    <tr key={index}>
                        <Summary
                          name={name}
                          index={index}
                          reverseCallback={reverseList}
                          promoteCallback={promoteList}
                          counter={counter}
                          incrementCallback={incrementCounter}
                        />
                    </tr>
                )}
            </tbody>
        </table>
      

    </div>
  );
}

export default App;
