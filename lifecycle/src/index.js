import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById("messageDiv").classList.add("bg-info");

document.getElementById("bob").classList.add("bg-primary");
document.getElementById("alice").classList.add("bg-secondary");
document.getElementById("dora").classList.add("bg-info");


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
