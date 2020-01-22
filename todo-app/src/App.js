import React, { Component } from 'react'

import TodoBanner from './TodoBanner';
import TodoRows from './TodoRows';
import TodoCreator from './TodoCreator';

class App extends Component {

  constructor(props){

    super(props);
    this.state = {
      userName: "Amit Taylor",
      todoItems : [
        { action : "Buy Flowers", done : false },
        { action : "Get Shoes", done : false },
        { action : "Collect Tickets", done : true },
        { action : "Call Joe", done : false}
      ]
    };
    
  }

  createNewTodo =(task)=>{
    if(!this.state.todoItems.find(item => item.action === task.action)){
      this.setState({
        todoItems : [...this.state.todoItems, { action: task.action, done: false }]
      })
    }
  }

  todoTableRows =()=> this.state.todoItems.map(item =>
    <TodoRows key={item.action} item={item} callBack={this.toggleTodo} />
  );

  toggleTodo=(todo)=> this.setState({
    todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done} : item
    )
  });

  render() {

    return (
      <div>
          <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
          <div className="container-fluid">
            <TodoCreator callBack={this.createNewTodo}  />
          </div>
          <table className="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
            </thead>
            <tbody>
              {this.todoTableRows()}
            </tbody>
          </table>
      </div>
    );

  }

}

export default App;

