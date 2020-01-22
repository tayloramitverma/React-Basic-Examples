import {sumValues} from './example';

//Understanding Async and await

export  function asyncAdd(values){
    return new Promise( callback=>
        setTimeout(()=>{
            let total = sumValues(values);
            console.log(`Async Total: ${total}`);
            callback(total);
        }, 50)); 
}
