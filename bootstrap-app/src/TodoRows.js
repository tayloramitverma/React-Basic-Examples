import React, { Component } from 'react'

class TodoRows extends Component{


    render =()=>
    <tr>
      <td>{this.props.item.action}</td>
      <td>
        <input type="checkbox" checked={this.props.item.done} onChange={()=>this.props.callBack(this.props.item)}/>
      </td>
    </tr>
}

export default TodoRows;