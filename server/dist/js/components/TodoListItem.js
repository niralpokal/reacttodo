import React from 'react'

class TodoListItem extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <li className="list-group-item">{this.props.children}</li>
    )
  }
}
export default TodoListItem
